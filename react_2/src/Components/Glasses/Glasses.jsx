import React, { Component } from "react";
import "./Glasses.css";

export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected : false};
  }

  render() {
    return (
      <div
        className="imgContainer"
        onClick={() => this.props.selectGlasses(this.props.item)}
      >
        <img className="img-fluid" src={this.props.item.url} alt="" />
      </div>
    );
  }
}
