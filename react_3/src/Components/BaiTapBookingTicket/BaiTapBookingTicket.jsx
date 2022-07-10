import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import LeftPane from "./LeftPane/LeftPane";
import RightPane from "./RightPane/RightPane";

export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div className="bookingMovie row">
        <div className="col-8">
          <LeftPane />
        </div>
        <div className="col-4">
          <RightPane />
        </div>
      </div>
    );
  }
}
