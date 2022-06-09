export class User {
  constructor(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    hinhAnh,
    loaiND,
    ngonNgu,
    moTa,
    id
  ) {
    this.id = id;
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.matKhau = matKhau;
    this.email = email;
    this.loaiND = this.convertUserType(loaiND);
    this.ngonNgu = this.getOption(ngonNgu);
    this.moTa = moTa;
    this.hinhAnh = hinhAnh;
  }
  getOption(property) {
    if (typeof property === "object") {
      let id = property.selectedIndex;
      return property.options[id].text;
    } else {
      return property;
    }
  }
  convertUserType(loaiND) {
    let type = this.getOption(loaiND);
    if (type !== loaiND) {
      if (type === "Giáo viên") {
        return "GV";
      } else if (type === "Học viên") {
        return "HV";
      } else {
        return 'Chọn loại người dùng';
      }
    } else {
      return loaiND;
    }
  }
}
