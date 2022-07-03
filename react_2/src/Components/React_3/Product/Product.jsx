import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const item = this.props.item;
    const selectShoes = this.props.setStateModal;
    return (
      <div>
        <div className="card">
          <img className="card-img-top img-fluid" src={item.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">$ {item.price}</p>
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => selectShoes(item)}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
