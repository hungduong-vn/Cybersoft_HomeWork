import React, { Component } from "react";
import Card from "../Card/Card";

export default class Grid extends Component {
  render() {
    return (
      <section className="py-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <div className="col-3">
              <Card></Card>
            </div>
            <div className="col-3">
              <Card></Card>
            </div>
            <div className="col-3">
              <Card></Card>
            </div>
            <div className="col-3">
              <Card></Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
