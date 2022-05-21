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
    printDSNV(dsnv.arr);
  }
}
getLocalStorage(dsnv);


getEle("#btnThem").onclick = function () {
  getEle("#btnCapNhat").style.display = "none";
  // arrFill = [
  //   "0000001",
  //   "Duong Ngoc Hung",
  //   "duongngochung13@gmail.com",
  //   "Hung@2k",
  //   "12/03/2000",
  //   "10000000",
  //   "Sếp",
  //   "200",
  // ];
  // helper.fill(...arrFill);
};

//1. In ra table danh sách nhân viên
function printDSNV(arrNV) {
  var content = "";
  if (arrNV.length === 0){
    return;
  }
  arrNV.forEach(function (ele, id) {
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
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNV('${ele.taiKhoan}')">✎</button>
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
  printDSNV(dsnv.arr);
  setLocalStorage(dsnv);
};

//7. Xoá Nhân Viên
function xoaNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);
  printDSNV(dsnv.arr);
  setLocalStorage(dsnv);
}

//8. Cập nhật Nhân Viên
/*
- Bấm nút "Sửa" => call hàm suaNV(_taiKhoan)
- Hiện lên form nhập thông tin chỉnh sửa:
  - Form điền sẵn các trường = info của nhanVien có taiKhoan === taiKhoan
  - Trường "Tài Khoản" disabled = true.
- User nhập xong, bấm nút "Cập nhật":
  - Validate input mới này.
  - If validate đạt => Thêm vô dsnv, lưu vô storage, in ra table
 */
function suaNV(taiKhoan) {
  getEle("#btnCapNhat").style.display = "inline-block";
  var nv = dsnv.suaNV(taiKhoan);
  var arrInput = [
    nv.taiKhoan,
    nv.hoTen,
    nv.email,
    nv.matKhau,
    nv.ngayLam,
    nv.luongCoBan,
    nv.chucVu,
    nv.gioLamThang,
  ];
  helper.fill(...arrInput);
  getEle("#tknv").disabled = true;
  getEle("#btnCapNhat").onclick = function () {
    if (validation.validate(arrInput)) {
      var newInput = [];
      helper.arrInputId.forEach(function (ele, id) {
        newInput.push(getEle(ele).value);
      });
      var newNV = new NhanVien(...newInput);
      dsnv.updateNV(newNV);
      newNV.xepLoaiNV();
      newNV.tinhTongLuong();
      printDSNV(dsnv.arr);
      setLocalStorage(dsnv);
      helper.fill("", "", "", "", "", "", "", "");
    }
    getEle("#tknv").disabled = false;
  };
}
//9. Tìm nhân viên theo xepLoai=> Hiển thị các kq tìm thấy
getEle("#searchName").addEventListener("keyup", function () {
  var kw = getEle("#searchName").value;
  var nvFound = dsnv.timKiemNV(kw);
  printDSNV(nvFound);
});
