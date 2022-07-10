import React, { Component } from "react";
// import Seat from '../Seat/Seat'
// import SeatCol from '../SeatCol/SeatCol'
// import SeatRow from '../SeatRow/SeatRow'

import DSGhe from "./../../../Data/DSGhe.json";

export default class SeatsArea extends Component {
  renderFirstRow = (firstRow) => {
    console.log("Entering firstRow");
    return (
      <div className="row rowGhe" key="-1">
        <div className="firstChar col-1" style={{ opacity: "0" }}>
          Hi
        </div>
        {firstRow.map((ele, id) => {
          console.log(ele.soGhe);
          return (
            <div key={id} className="rowNumber">
              {ele.soGhe}
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="row">
        {/* <div className="col-1">
          <SeatCol/>
        </div>
        <div className="col-11">
          <div className="col-12">
            <SeatRow/>
            <Seat/>
          </div>
        </div> */}
        {DSGhe.map((row, rowId) => {
          if (rowId === 0) {
            console.log("FIrst Row");
            return this.renderFirstRow(row.danhSachGhe);
          } else {
            return (
              <div className="row rowGhe" key={rowId}>
                <div className="firstChar col-1">{row.hang}</div>
                {row.danhSachGhe.map((ele, id) => {
                  return (
                    <div key={id} className="ghe">
                      {ele.soGhe}
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    );
  }
}
