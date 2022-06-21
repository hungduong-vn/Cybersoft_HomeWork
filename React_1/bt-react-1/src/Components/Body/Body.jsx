import React, { Component } from "react";
import Banner from "../Banner/Banner";
import Grid from "../Grid/Grid";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Banner className="col-12"></Banner>
          <Grid className="col-12"></Grid>
        </div>
      </div>
    );
  }
}
