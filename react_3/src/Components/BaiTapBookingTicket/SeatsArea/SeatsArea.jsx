import React, { Component } from "react";
// import Seat from '../Seat/Seat'

import DSGhe from "./../../../Data/DSGhe.json";

export default class SeatsArea extends Component {
  renderFirstRow = (firstRow) => {
    return (
      <div className="row rowGhe mt-3 mb-0 " key="-1">
        <div className="firstChar px-2" style={{ opacity: "0" }}>
          Hi
        </div>
        <div className="col-11 row pl-0">
          {firstRow.map((ele, id) => {
            return (
              <div key={id} className="col-1">
                <div className="rowNumber">{ele.soGhe}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="row">
        {DSGhe.map((row, rowId) => {
          if (rowId === 0) {
            console.log("FIrst Row");
            return this.renderFirstRow(row.danhSachGhe);
          } else {
            return (
              <div className="row rowGhe" key={rowId}>
                <div className="firstChar px-3">{row.hang}</div>
                <div className="col-11 row pl-0">
                  {row.danhSachGhe.map((ele, id) => {
                    return (
                      <div key={id} className="col-1">
                        <div className="ghe">{id + 1}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
