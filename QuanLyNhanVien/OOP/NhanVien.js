function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLamThang
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLamThang = _gioLamThang;
  this.tongLuong = 0;
  this.loaiNV = "";
  //5. Tính tổng lương
  this.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu === "Trưởng Phòng") {
      this.tongLuong = this.luongCoBan * 2;
    } else if (this.chucVu === "Nhân viên") {
      this.tongLuong = this.luongCoBan * 1;
    }
  };
  //6. Xếp loại Nhân Viên
  this.xepLoaiNV = function () {
    var gioLamViec = this.gioLamThang * 1;
    if (gioLamViec >= 192) {
      this.loaiNV = "Xuất Sắc";
    } else if (gioLamViec >= 176) {
      this.loaiNV = "Giỏi";
    } else if (gioLamViec >= 160) {
      this.loaiNV = "Khá";
    } else {
      this.loaiNV = "Trung Bình";
    }
  };
}
