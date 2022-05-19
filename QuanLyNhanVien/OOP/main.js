var dsnv = new DSNV();
var helper = new Helper();
var validation = new Validation();

function getEle(selector) {
  return document.querySelector(selector);
}

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

getEle("#btnThem").onclick = function () {
  helper.prefill();
};

//1. In ra table danh sách nhân viên
function printDSNV(dsnv) {
  var content = "";
  dsnv.arr.forEach(function (ele, id) {
    content += `
      <tr>
        <td>${ele.taiKhoan}</td>
        <td>${ele.hoTen}</td>
        <td>${ele.email}</td>
        <td>${ele.ngayLam}</td>
        <td>${ele.chucVu}</td>
        <td>${ele.tongLuong}</td>
        <td>${ele.loaiNV}</td>
        <td>
          <button class="btn btn-danger" onclick="xoaNV('${ele.taiKhoan}')">✕</button>
          <button class="btn btn-info" onclick="suaNV('${ele.taiKhoan}')">✎</button>
        </td>
      </tr>
      `;
  });
  getEle("#tableDanhSach").innerHTML = content;
}
//2&3. Thêm Nhân Viên từ input user
getEle("#btnThemNV").onclick = function () {
  var arrInput = [];
  helper.arrInputId.forEach(function (ele, id) {
    arrInput.push(getEle(ele).value);
  });
  var nhanVien = new NhanVien(...arrInput);
  if (validation.validate(arrInput)) {
    //If input has no error => add nhanVien into dsnv
    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNV();
    dsnv.themNV(nhanVien);
  }
  printDSNV(dsnv);
  setLocalStorage(dsnv);
};

//7. Xoá Nhân Viên
function xoaNV(taiKhoan){
  dsnv.xoaNV(taiKhoan);
  printDSNV(dsnv);
  setLocalStorage(dsnv);
}

//8. Cập nhật Nhân Viên
function suaNV(taiKhoan){
  console.log(123);
}
getLocalStorage(dsnv);
