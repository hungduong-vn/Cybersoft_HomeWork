import React, { Component } from "react";
import Glasses from "../Glasses/Glasses";
import glassesList from "./../../Data/dataGlasses.json";

export default class GlassesList extends Component {
  selectGlasses = (glasses) => {
    this.props.selectGlasses(glasses);
  };
  renderList = () => {
    return glassesList.map((ele) => {
      return (
        <div className="col-2" key={ele.id}>
          <Glasses item={ele} selectGlasses={this.selectGlasses} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}
