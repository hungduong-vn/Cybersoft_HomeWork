import React, { Component } from "react";
import FormHeader from "./FormHeader";
import { connect } from "react-redux";

const DEFAULT_SV = { maSV: "", hoTen: "", soDienThoai: "", email: "" };
class Form extends Component {
  state = {
    values: DEFAULT_SV,
    errors: DEFAULT_SV,
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleBlur = (event) => {
    console.log(event.target.validity);
  };
  render() {
    return (
      <div className="container">
        <FormHeader />
        <form onSubmit={this.handleSubmit} className="form-group text-left">
          <div className="row">
            <div className="col-6 pt-3">
              <label htmlFor="maSV">Mã SV</label>
              <input
                required
                onBlur={this.handleBlur}
                type="text"
                className="form-control"
                name="maSV"
              />
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="hoTen">Họ Tên</label>
              <input
                required
                onBlur={this.handleBlur}
                type="text"
                className="form-control"
                name="hoTen"
              />
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="soDienThoai">Số Điện Thoại</label>
              <input
                required
                onBlur={this.handleBlur}
                type="text"
                className="form-control"
                name="soDienThoai"
              />
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="email">Email</label>
              <input
                required
                onBlur={this.handleBlur}
                type="text"
                className="form-control"
                name="email"
              />
            </div>
          </div>
          <button className="btn btn-success mt-3">Thêm Sinh Viên</button>
        </form>
      </div>
    );
  }
}
export default connect((state) => ({ ...state.sinhVienReducer }))(Form);
