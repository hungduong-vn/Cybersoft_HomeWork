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
    }
  ],
  selectedSV: {},
};
export const sinhVienReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
  }
};
