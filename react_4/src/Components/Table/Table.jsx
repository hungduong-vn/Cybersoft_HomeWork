import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSVAction, selectSVAction } from "../../Store/actions/sinhVien";
class Table extends Component {
  state = { keyword: "" };
  renderList = () => {
    const data = this.props.listSV.filter((ele) => {
      return (
        ele.hoTen
        .toLowerCase()
        .trim()
        .indexOf(
          this.state.keyword.toLowerCase().trim()
        ) !== -1
      );
    });
    return data.map((ele) => {
      return (
        <tr key={ele.maSV}>
          <td>{ele.maSV}</td>
          <td>{ele.hoTen}</td>
          <td>{ele.soDienThoai}</td>
          <td>{ele.email}</td>
          <td>
            <button
              className="btn btn-outline-dark mr-2"
              onClick={() => this.props.dispatch(selectSVAction(ele))}
            >
              Sửa
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.props.dispatch(deleteSVAction(ele.maSV))}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table container text-left">
        <thead className="bg-dark text-light">
          <tr>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Tìm SV theo Tên"
                onChange={(event) =>
                  this.setState({ keyword: event.target.value })
                }
              />
            </th>
          </tr>
        </thead>
        <tbody>{this.renderList()}</tbody>
      </table>
    );
  }
}
export default connect((state) => ({ ...state.sinhVienReducer }))(Table);
