var arrInputId = [
  "#tknv",
  "#name",
  "#email",
  "#password",
  "#datepicker",
  "#luongCB",
  "#chucvu",
  "#gioLam",
];

var arrAlertId = [
  "#tbTKNV",
  "#tbTen",
  "#tbEmail",
  "#tbMatKhau",
  "#tbNgay",
  "#tbLuongCB",
  "#tbChucVu",
  "#tbGiolam",
];

function getEle(selector) {
  return document.querySelector(selector);
}

function prefill() {
  getEle("#tknv").value = "0000001";
  getEle("#name").value = "Duong Ngoc Hung";
  getEle("#email").value = "duongngochung13@gmail.com";
  getEle("#password").value = "Hung@2k";
  getEle("#datepicker").value = "12/03/2000";
  getEle("#luongCB").value = "10000000";
  getEle("#chucvu").value = "Sếp";
  getEle("#gioLam").value = "200";
}

getEle("#btnThem").onclick = function () {
  prefill();
};

function setLocalStorage(dsnv) {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}

function getLocalStorage(dsnv) {
  if (localStorage.getItem("DSNV")) {
    var dataString = localStorage.getItem("DSNV");
    //Convert string => JSON
    var dataJson = JSON.parse(dataString);
    dsnv.arr = dataJson;
    printDSNV(dsnv);
  }
}