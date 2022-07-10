import React, { Component } from "react";
import RightTitle from "../RightTitle/RightTitle";
import SeatLegends from "../SeatLegends/SeatLegends";

export default class RightPane extends Component {
  render() {
    return <div>
      <RightTitle/>
      <SeatLegends/>
    </div>;
  }
}
