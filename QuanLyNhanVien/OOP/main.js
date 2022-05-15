var dsnv = new DSNV();
function getEle(selector) {
  return document.querySelector(selector);
}

// getEle("#btnThem").onclick = function () {
//     prefill();
// };

getEle("#btnThemNV").onclick = function () {
  var arrInput = [];  
  arrInputId.forEach(function(ele, id){
    arrInput.push(getEle(ele).value);
  })
  var nhanVien = new NhanVien(...arrInput);
  validate(arrInput);
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

function validate(arrInput) {
  //For each field
  arrInput.forEach(function (ele, id) {
    //Validate if empty
    var divTB = valEmpty(ele, id);
    //If already empty => No need to check futher
    if (divTB.style.display === "block"){
      return;
    }
    //Validate if match the rules
    if (eval(arrRuleVal[id])) {
      divTB.style.display = 'none';
    } else {
      divTB.innerHTML = alertVal[id];
      divTB.style.display = 'block';
    }
  });
}
