import React, { Component } from "react";
import OrderTable from "../OrderTable/OrderTable";
import RightTitle from "../RightTitle/RightTitle";
import SeatLegends from "../SeatLegends/SeatLegends";

export default class RightPane extends Component {
  render() {
    return <div className="pt-5">
      <RightTitle/>
      <SeatLegends/>
      <OrderTable/>
    </div>;
  }
}
