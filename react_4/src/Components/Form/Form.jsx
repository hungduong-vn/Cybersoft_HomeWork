import React, { Component, createRef } from "react";
import FormHeader from "./FormHeader";
import { connect } from "react-redux";
import { addSVAction, updateSVAction } from "../../Store/actions/sinhVien";

const DEFAULT_SV = { maSV: "", hoTen: "", soDienThoai: "", email: "" };
class Form extends Component {
  state = {
    values: DEFAULT_SV,
    errors: DEFAULT_SV,
  };
  formRef = createRef();
  static getDerivedStateFromProps = (nextProps, currentState) => {
    if (
      nextProps.selectedSV &&
      nextProps.selectedSV.maSV !== currentState.values.maSV
    ) {
      currentState.values = nextProps.selectedSV;
    }
    return currentState;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    for (const key in this.state.errors) {
      const message = this.state.errors[key];
      if (message) {
        return;
      }
    }
    if (!event.target.checkValidity()) {
      return;
    }
    this.props.dispatch(
      this.props.selectedSV
        ? updateSVAction(this.state.values)
        : addSVAction(this.state.values)
    );
    this.setState(
      {
        values: DEFAULT_SV,
      },
      () => {
        //Buộc update & re-render
        this.forceUpdate();
      }
    );
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };
  checkUnique = (maSV) => {
    return this.props.listSV.filter((ele) => ele.maSV === maSV).length === 0;
  };
  handleBlur = (event) => {
    const {
      name,
      title,
      maxLength,
      value,
      minLength,
      validity: { patternMismatch, valueMissing },
    } = event.target;
    let message = "";
    //Validation
    if (name === "maSV" && !this.checkUnique(value)) {
      message = `${title} "${value}" đã tồn tại, vui lòng nhập mã khác`;
    }
    if (patternMismatch) {
      message = `${title} không hợp lệ`;
    }
    if (
      minLength > -1 &&
      maxLength > -1 &&
      (value.length < minLength || value.length > maxLength)
    ) {
      message = `${title} có độ dài từ ${minLength} tới ${maxLength} kí tự`;
    }
    if (valueMissing) {
      message = `(*) Vui lòng nhập vào ${title}`;
    }
    //Set error message
    this.setState({ errors: { ...this.state.errors, [name]: message } });
  };

  render() {
    const { maSV, hoTen, soDienThoai, email } = this.state.values || {};
    return (
      <div className="container">
        <FormHeader />
        <form
          ref={this.formRef}
          onSubmit={this.handleSubmit}
          className="form-group text-left"
          noValidate
        >
          <div className="row">
            <div className="col-6 pt-3">
              <label htmlFor="maSV">Mã SV</label>
              <input
                disabled={this.props.selectedSV} //Disabled if editing to update
                value={maSV}
                title="Mã SV"
                required
                pattern="^[0-9]*$"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="maSV"
              />
              {this.state.errors.maSV && (
                <span className="text-danger">{this.state.errors.maSV}</span>
              )}
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="hoTen">Họ Tên</label>
              <input
                value={hoTen}
                title="Họ Tên"
                required
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="hoTen"
              />
              {this.state.errors.hoTen && (
                <span className="text-danger">{this.state.errors.hoTen}</span>
              )}
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="soDienThoai">Số Điện Thoại</label>
              <input
                value={soDienThoai}
                title="Số Điện Thoại"
                required
                pattern="^[0-9]*$"
                minLength={9}
                maxLength={12}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="soDienThoai"
              />
              {this.state.errors.soDienThoai && (
                <span className="text-danger">
                  {this.state.errors.soDienThoai}
                </span>
              )}
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                title="Email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="email"
              />
              {this.state.errors.email && (
                <span className="text-danger">{this.state.errors.email}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={!this.formRef.current?.checkValidity()}
            className="btn btn-success mt-3"
          >
            {!this.props.selectedSV ? "Thêm Sinh Viên" : "Cập Nhật"}
          </button>
        </form>
      </div>
    );
  }
}
export default connect((state) => ({ ...state.sinhVienReducer }))(Form);
