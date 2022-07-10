import React, { Component } from "react";

export default class SeatLegends extends Component {
  render() {
    return (
      <div className="pt-3">
        <div className="row pl-4">
          <div className="gheDuocChon"></div>
          <div className="col-6 legendTxt">Ghế đã đặt</div>
        </div>
        <div className="row pl-4 mt-2">
          <div className="gheDangChon"></div>
          <div className="col-6 legendTxt">Ghế đang chọn</div>
        </div>
        <div className="row pl-4 mt-2">
          <div className="ghe"></div>
          <div className="col-6 legendTxt">Ghế chưa đặt</div>
        </div>
      </div>
    );
  }
}
