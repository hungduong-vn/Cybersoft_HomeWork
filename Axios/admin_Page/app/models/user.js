export class User {
  constructor(taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa) {
    // this.id = id;
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
    let id = property.selectedIndex;
    return property.options[id].text;
  }
  convertUserType(loaiND) {
    let type = this.getOption(loaiND);
    return (type === "Giáo viên") ? "GV" : "HV";
  }
}
