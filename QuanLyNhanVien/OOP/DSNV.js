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
  this.suaNV = function (_taiKhoan) {
    var viTriNV = this.timViTriNV(_taiKhoan);
    if (viTriNV !== -1) {
      return this.arr[viTriNV];
    }
    return null;
  };
  this.updateNV = function (NVMoi) {
    var viTriNV = this.timViTriNV(NVMoi.taiKhoan);
    if (viTriNV !== -1) {
      this.arr[viTriNV] = NVMoi;
    }
  };
  this.timKiemNV = function (kw) {
    var arrFound = [];
    this.arr.forEach(function (ele, id) {
      if (ele.loaiNV.toLowerCase().indexOf(kw.toLowerCase()) > -1) {
        arrFound.push(ele);
      }
    });
    return arrFound;
  };
}
