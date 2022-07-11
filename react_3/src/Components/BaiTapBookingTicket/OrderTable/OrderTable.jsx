import React, { Component } from "react";
import { connect } from "react-redux";

class OrderTable extends Component {
  renderBody = () => {
    return this.props.selectedSeats.map((ele, id) => {
      return (
        <tr key={id}>
          <td>{ele.soGhe}</td>
          <td>{ele.gia}</td>
          <td>
            <button
              onClick={() => this.props.unselectSeat(ele)}
              className="btn btn-danger"
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log("Order", this.props);
    return (
      <div className="pt-3 pl-4">
        <table className="table">
          <thead>
            <tr style={{ color: "white" }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody>{this.renderBody()}</tbody>
          <tfoot>
            <tr>
              <td style={{ color: "white" }}>Tổng tiền</td>
              <td>
                {this.props.selectedSeats.reduce(
                  (pre, ele) => pre + ele.gia,
                  0
                )}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    unselectSeat: (seat) => {
      dispatch({
        type: "UNSELECT_SEAT",
        payload: seat,
      })
    }
  }
}
const mapStateToProps = (state) => ({ ...state.ticketReducer });
export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
