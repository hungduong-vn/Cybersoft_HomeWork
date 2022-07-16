import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table className="table container text-left">
        <thead className="bg-dark text-light">
          <tr>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dương Ngọc Hùng</td>
            <td>0123456789</td>
            <td>hungduong@gmail.com</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
