const DEFAULT_STATE = {
  selectedSeats: [],
  reservedSeats: [],
  totalPrice: 0,
};

export const ticketReducer = (state = DEFAULT_STATE, { type, payload }) => {
  let swapDisplay = (idDisappear, idAppear) => {
    document.getElementById(idDisappear).style.display = "none";
    document.getElementById(idAppear).style.display = "block";
  };
  switch (type) {
    case "ADD_RESERVED_SEAT": {
      const reservedSeats = [...state.reservedSeats];
      reservedSeats.push(payload);
      state.reservedSeats = [...reservedSeats];
      return { ...state };
    }
    case "SELECT_SEAT": {
      let selectedSeats = [...state.selectedSeats];
      let idx = selectedSeats.findIndex((ele) => ele.soGhe === payload.soGhe);
      if (idx === -1) {
        selectedSeats.push(payload);
      }
      state.selectedSeats = [...selectedSeats];
      swapDisplay(payload.soGhe, payload.soGhe + "Selected");
      // console.log(state);
      return { ...state };
    }
    case "UNSELECT_SEAT": {
      let selectedSeats = [...state.selectedSeats];
      selectedSeats = selectedSeats.filter(
        (ele) => ele.soGhe !== payload.soGhe
      );
      state.selectedSeats = [...selectedSeats];
      console.log("Redux Unselecting", state.selectedSeats);
      swapDisplay(payload.soGhe + "Selected", payload.soGhe);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
