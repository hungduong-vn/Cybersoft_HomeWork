var alertVal = [
  "Tài Khoản có độ dài từ 4 đến 6 ký số",
  "Tên Nhân Viên phải là chữ",
  "Email phải đúng định dạng (VD: abc@xyz.com)",
  "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",
  "Ngày làm phải theo định dạng mm/dd/yyyy",
  "Lương cơ bản từ 1.000.000 -> 20.000.000",
  "Số giờ làm trong tháng từ 80 -> 200 giờ",
];
var alertEmpty = "Vui lòng không để trống ";

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
  "#tbGiolam"
];

var dateFormat = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/
var passwordFormat = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}+$/
var letters = /^[A-Za-z]+$/;
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var accountLength = /^{4,6}+$/;
var arrDKVal = ["ele.length > 4 || ele.length < 6",
"ele.match(letters)",
"ele.match(emailFormat)",
"ele.match(passwordFormat)",
"ele.match(dateFormat)",
]