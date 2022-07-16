import React, { Component } from "react";
import FormHeader from "./FormHeader";

export default class Form extends Component {
  render() {
    return (
      <div className="container">
        <FormHeader />
        <form className="form-group text-left">
          <div className="row">
            <div className="col-6 pt-3">
              <label htmlFor="maSV">Mã SV</label>
              <input type="text" className="form-control" name="maSV" />
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="hoTen">Họ Tên</label>
              <input type="text" className="form-control" name="hoTen" />
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="soDienThoai">Số Điện Thoại</label>
              <input type="text" className="form-control" name="soDienThoai" />
            </div>
            <div className="col-6 pt-3">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
          </div>
          <button className="btn btn-success mt-3">Thêm Sinh Viên</button>
        </form>
      </div>
    );
  }
}
