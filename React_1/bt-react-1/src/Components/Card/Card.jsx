import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      // <div>
      //   <div className="card bg-light border-0 h-100">
      //     <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
      //       <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
      //         <i className="bi bi-collection" />
      //       </div>
      //       <h2 className="fs-4 fw-bold">Fresh new layout</h2>
      //       <p className="mb-0">
      //         With Bootstrap 5, we've created a fresh new layout for this
      //         template!
      //       </p>
      //     </div>
      //   </div>
      // </div>
      <div className="card" >
        <img className="card-img-top" src="./image/React_1/286x180.svg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
