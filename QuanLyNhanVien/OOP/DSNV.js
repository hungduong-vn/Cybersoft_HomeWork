function DSNV() {
  this.arr = [];

  this.themNV = function (NhanVien) {
    this.arr.push(NhanVien);
  };

  this.timViTriNV = function (_taiKhoan) {
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].taiKhoan === _taiKhoan) {
        return i;
      }
    }
    return -1;
  };
  this.xoaNV = function (_taiKhoan) {
    var viTriNV = this.timViTriNV(_taiKhoan);
    if (viTriNV !== -1) {
      this.arr.splice(viTriNV, 1);
    }
  };
}
