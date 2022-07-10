import React, { Component } from "react";

export default class OrderTable extends Component {
  render() {
    return (
      <div className="pt-3 pl-4">
        <table className="table">
          <thead>
            <tr style={{color: 'white'}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1</td>
              <td>150000</td>
              <td>
                <button className="btn btn-danger">X</button>
              </td>
            </tr>
            <tr></tr>
          </tbody>
          <tfoot>
            <tr>
              <td style={{color: 'white'}}>Tổng tiền</td>
              <td>450000000</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
