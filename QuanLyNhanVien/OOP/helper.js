function Helper() {
  this.arrInputId = [
    "#tknv",
    "#name",
    "#email",
    "#password",
    "#datepicker",
    "#luongCB",
    "#chucvu",
    "#gioLam",
  ];
  this.arrAlertId = [
    "#tbTKNV",
    "#tbTen",
    "#tbEmail",
    "#tbMatKhau",
    "#tbNgay",
    "#tbLuongCB",
    "#tbChucVu",
    "#tbGiolam",
  ];
  this.fill = function (
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLamThang
  ) {
    getEle("#tknv").value = taiKhoan;
    getEle("#name").value = hoTen;
    getEle("#email").value = email;
    getEle("#password").value = matKhau;
    getEle("#datepicker").value = ngayLam;
    getEle("#luongCB").value = luongCoBan;
    getEle("#chucvu").value = chucVu;
    getEle("#gioLam").value = gioLamThang;
  };
  this.clear = function () {
    this.fill("", "", "", "", "mm/dd/yyyy", "", "Chọn chức vụ", "");
  };
  this.clearMess = function(){
    this.arrAlertId.forEach(function(ele){
      getEle(ele).innerHTML = "";
      getEle(ele).style.display = 'none';
    })
  }
}
function getEle(selector) {
  return document.querySelector(selector);
}
