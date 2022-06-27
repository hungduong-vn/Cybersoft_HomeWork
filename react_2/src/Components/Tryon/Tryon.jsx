import React, { Component } from "react";
import Glasses from "../Glasses/Glasses";
import "./Tryon.css";
export default class Tryon extends Component {
  renderGlassesInfo = (glasses) => {
    console.log("render Info");
    return (
      <div className="glassesInfo">
        <h5>
          {glasses.name} -- <span>${glasses.price}</span>
        </h5>
        <p>{glasses.desc}</p>
      </div>
    );
  };
  renderGlasses = (glasses) => {
    console.log("render Img");
    return (
      <div className="glasses col-9">
        <Glasses item={glasses} />
      </div>
    );
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="glassesOn">
              <h5>Glasses Info</h5>
              <img src="./img/model.jpg" alt="" className="img-fluid" />
              {/* {this.props.item !== "" && this.renderGlasses(this.props.item)} */}
              {this.props.item !== "" &&
                this.renderGlassesInfo(this.props.item)}
            </div>
          </div>
          <div className="col-6">
            <div className="glassesOff">
              <h5>Glasses Image</h5>
              <img src="./img/model.jpg" alt="" className="img-fluid" />
              {this.props.item !== "" && this.renderGlasses(this.props.item)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
