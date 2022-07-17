import { ADD_SV, DELETE_SV, SELECT_SV, UPDATE_SV } from "../types/sinhVien";

const DEFAULT_STATE = {
  listSV: [
    {
      maSV: "1",
      hoTen: "Dương Ngọc Hùng",
      soDienThoai: "0123456789",
      email: "hungduong@gmail.com",
    },
    {
      maSV: "2",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "0909123456",
      email: "a.nguyenvan@gmail.com",
    },
  ],
  selectedSV: null,
};
export const sinhVienReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_SV: {
      state.listSV = [...state.listSV, payload];
      return { ...state };
    }
    case SELECT_SV: {
      return { ...state, selectedSV: payload };
    }
    case UPDATE_SV: {
      state.listSV = state.listSV.map((ele) =>
        ele.maSV === payload.maSV ? payload : ele
      );
      state.selectedSV = null;
      return { ...state };
    }
    case DELETE_SV: {
      state.listSV = state.listSV.filter((ele) => ele.maSV !== payload);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
