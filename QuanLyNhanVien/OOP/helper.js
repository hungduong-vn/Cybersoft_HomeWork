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
  this.prefill = function () {
    getEle("#tknv").value = "0000001";
    getEle("#name").value = "Duong Ngoc Hung";
    getEle("#email").value = "duongngochung13@gmail.com";
    getEle("#password").value = "Hung@2k";
    getEle("#datepicker").value = "12/03/2000";
    getEle("#luongCB").value = "10000000";
    getEle("#chucvu").value = "Sếp";
    getEle("#gioLam").value = "200";
  };
}
function getEle(selector) {
  return document.querySelector(selector);
}
