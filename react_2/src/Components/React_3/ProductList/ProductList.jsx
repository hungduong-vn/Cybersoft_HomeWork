import React, { Component } from "react";
import Product from "../Product/Product";
import shoesList from "./../Data/shoesData.json";

export default class ProductList extends Component {
  renderList() {
    return shoesList.map((ele) => {
      return (
        <div key={ele.id} className="col-4 mb-4">
          <Product item={ele} setStateModal={this.props.setStateModal}/>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}
