//4. Validation

var alertEmpty = "Vui lòng không để trống ";

var alertVal = [
  "Tài Khoản là chuỗi số có độ dài từ 4 đến 6 ký số",
  "Tên Nhân Viên phải là chữ",
  "Email phải đúng định dạng (VD: abc@xyz.com)",
  "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",
  "Ngày làm phải theo định dạng mm/dd/yyyy",
  "Lương cơ bản từ 1.000.000 -> 20.000.000",
  "Chọn chức vụ hợp lệ (Sếp, Trưởng Phòng, Nhân Viên)",
  "Số giờ làm trong tháng từ 80 -> 200 giờ",
];

var accountFormat = /[0-9]{4,6}/g;
var letters = /[A-Za-z]+/g;
var emailFormat = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/g;
var passwordFormat =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
var dateFormat =
  /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
// var salaryRange = /^[2][0]{7}|[1][0-9]{7}|[1-9][0-9]{6}$/;
// var workHour = /[2][0][0]|[1][0-9]{2}|[8-9][0-9]/g;

var arrRuleVal = [
  "ele.match(accountFormat)",
  "ele.match(letters)",
  "ele.match(emailFormat)",
  "ele.match(passwordFormat)",
  "ele.match(dateFormat)",
  "Number(ele) >= 1000000 && Number(ele) <= 20000000",
  "true",
  "Number(ele) >= 80 && Number(ele) <= 200",
];

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
  var valid = true;
  //For each field
  arrInput.forEach(function (ele, id) {
    //Validate if empty
    var divTB = valEmpty(ele, id);
    //If already empty => No need to check futher
    if (divTB.style.display === "block") {
      valid = false;
      return;
    }
    //Validate if match the rules
    if (eval(arrRuleVal[id])) {
      divTB.style.display = "none";
    } else {
      divTB.innerHTML = alertVal[id];
      divTB.style.display = "block";
      valid = false;
    }
  });
  return valid;
}