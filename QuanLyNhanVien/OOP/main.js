var dsnv = new DSNV();

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
      </tr>
      `;
  });
  getEle("#tableDanhSach").innerHTML = content;
}
//2&3. Thêm Nhân Viên từ input user
getEle("#btnThemNV").onclick = function () {
  var arrInput = [];
  arrInputId.forEach(function (ele, id) {
    arrInput.push(getEle(ele).value);
  });
  var nhanVien = new NhanVien(...arrInput);
  if (validate(arrInput)) {
    //If input has no error => add nhanVien into dsnv
    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNV();
    dsnv.themNV(nhanVien);
  }
  printDSNV(dsnv);
  setLocalStorage(dsnv);
};


getLocalStorage(dsnv);
