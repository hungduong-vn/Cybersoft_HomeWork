var dsnv = new DSNV();
function getEle(selector) {
  return document.querySelector(selector);
}

function prefill() {
  getEle("#tknv").value = "Hung2k";
  getEle("#name").value = "Duong Ngoc Hung";
  getEle("#email").value = "duongngochung13@gmail.com";
  getEle("#password").value = "123456";
  getEle("#datepicker").value = "03/12/2000";
  getEle("#luongCB").value = "5000000";
  getEle("#chucvu").value = "Sếp";
  getEle("#gioLam").value = "120";
}

getEle("#btnThem").onclick = function () {
  //   prefill();
};

getEle("#btnThemNV").onclick = function () {
  var _taiKhoan = getEle("#tknv").value;
  var _hoTen = getEle("#name").value;
  var _email = getEle("#email").value;
  var _matKhau = getEle("#password").value;
  var _ngayLam = getEle("#datepicker").value;
  var _luongCoBan = getEle("#luongCB").value;
  var _chucVu = getEle("#chucvu").value;
  var _gioLamThang = getEle("#gioLam").value;

  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLamThang
  );
  validate(nhanVien);
  dsnv.themNV(nhanVien);
  printDSNV(dsnv);
};

function printDSNV(dsnv) {
  var content = "";
  dsnv.arr.forEach(function (ele, id) {
    content = `
      <tr>
        <td>${ele.taiKhoan}</td>
        <td>${ele.hoTen}</td>
        <td>${ele.email}</td>
        <td>${ele.ngayLam}</td>
        <td>${ele.chucVu}</td>
        <td>${ele.tongLuong}</td>
        <td>${ele.xepLoai}</td>
      </tr>
      `;
  });
  getEle("#tableDanhSach").innerHTML = content;
}

function valEmpty(field, id) {
  var divTB = getEle(arrAlertId[id]);
  if (field === "" || field === "Chọn chức vụ") {
    divTB.innerHTML = alertEmpty + getEle(arrInputId[id]).placeholder;
    divTB.style.display = "block";
  } else {
    divTB.style.display = "none";
  }
  return divTB;
}

function validate(nhanVien) {
  var arrInputField = [
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLamThang,
  ];
  //Validate Empty for each field
  arrInputField.forEach(function (ele, id) {
    var divTB = valEmpty(ele, id);
    switch (id) {
      case 0:
        if (ele.length < 4 || ele.length > 6) {
          divTB.innerHTML = alertVal[id];
          divTB.style.display = "block";
        }
        break;

      default:
        break;
    }
  });
  //Validate TK
  var divTB = getEle(arrAlertId[0]);
  if (arrInputField[0].length < 4 || arrInputField[0].length > 6) {
    divTB.innerHTML = alertVal[0];
    divTB.style.display = "block";
  } else {
    divTB.style.display = "none";
  }
  //Validate Ho Ten
}
