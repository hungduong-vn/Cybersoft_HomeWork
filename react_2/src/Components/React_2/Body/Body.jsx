import React, { Component } from "react";
import GlassesList from "../GlassesList/GlassesList";
import Tryon from "../Tryon/Tryon";

export default class Body extends Component {
  state = {
    selectedItem: "",
  };
  selectGlasses = (glasses) => {
    this.setState({ selectedItem: glasses });
  };
  render() {
    return (
      <div>
        <Tryon item={this.state.selectedItem} />
        <GlassesList selectGlasses={this.selectGlasses} />
      </div>
    );
  }
}
