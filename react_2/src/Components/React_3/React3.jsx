import React, { Component } from "react";
import Modal from "./Modal/Modal";
import ProductList from "./ProductList/ProductList";

export default class React3 extends Component {
  state = {
    productDetails: {},
  };
  setStateModal = (item) => {
    this.setState({ productDetails: item });
  };
  render() {
    return (
      <div>
        <div className="header mt-5">
          <h3 className="mb-0">BT REACT 3 - SHOES SHOP</h3>
        </div>
        <ProductList setStateModal={this.setStateModal} />
        <Modal content={this.state.productDetails}/>
      </div>
    );
  }
}
