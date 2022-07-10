import React, { Component } from "react";
import LeftTitle from "../LeftTitle/LeftTitle";
import Screen from "../Screen/Screen";
import SeatsArea from "../SeatsArea/SeatsArea";

export default class LeftPane extends Component {
  render() {
    return <div>
      <LeftTitle/>
      <Screen />
      <SeatsArea/>
    </div>;
  }
}
