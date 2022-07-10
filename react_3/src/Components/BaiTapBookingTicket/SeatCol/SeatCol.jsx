import React, { Component } from "react";

export default class SeatCol extends Component {
  colArr = ["-1", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  render() {
    return (
      <div>
        {this.colArr.map((ele, id) => {
          return id === 0 ? (
            <div key={id} className="firstChar" style={{'opacity':"0"}}>
              {ele}
            </div>
          ) : (
            <div key={id} className="firstChar">
              {ele}
            </div>
          );
        })}
      </div>
    );
  }
}
