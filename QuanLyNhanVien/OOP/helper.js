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

  function prefill() {
    getEle("#tknv").value = "0000001";
    getEle("#name").value = "Duong Ngoc Hung";
    getEle("#email").value = "duongngochung13@gmail.com";
    getEle("#password").value = "Hung@2k";
    getEle("#datepicker").value = "12/03/2000";
    getEle("#luongCB").value = "5000000";
    getEle("#chucvu").value = "Sếp";
    getEle("#gioLam").value = "120";
  }