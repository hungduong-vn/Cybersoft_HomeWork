var currentFormat = new Intl.NumberFormat("VN-vn");
//Ex1
document.getElementById("run1").onclick = function () {
  var diemChuan = document.getElementById("input1_1").value * 1;
  var diem_1 = document.getElementById("input1_2").value * 1;
  var diem_2 = document.getElementById("input1_3").value * 1;
  var diem_3 = document.getElementById("input1_4").value * 1;
  var kv = document.getElementById("input1_5").value;
  var doiTuong = document.getElementById("input1_6").value * 1;

  function tinhDiemThi(diem_1, diem_2, diem_3) {
    return diem_1 + diem_2 + diem_3;
  }
  var diemThi = tinhDiemThi(diem_1, diem_2, diem_3);
  function tinhDiemKV(kv) {
    switch (kv) {
      case "A":
        return 2;
      case "B":
        return 1;
      case "C":
        return 0.5;
      default:
        return 0;
    }
  }
  var diemKV = tinhDiemKV(kv);

  function tinhDiemDT(doiTuong) {
    switch (doiTuong) {
      case 1:
        return 2.5;
      case 2:
        return 1.5;
      case 3:
        return 1;
      default:
        return 0;
    }
  }
  var diemDT = tinhDiemDT(doiTuong);

  var diemFinal = diemThi + diemKV + diemDT;
  var kq = diemFinal >= diemChuan ? "Đậu" : "Rớt";
  var outputText =
    "Điểm Tổng Kết: " +
    "<strong>" +
    diemFinal +
    "</strong>" +
    "<br> => " +
    "<strong>" +
    kq +
    "</strong>";
  document.getElementById("output1").innerHTML = outputText;
  document.getElementById("output1").classList.add("showResult");
};
//Ex2
document.getElementById("run2").onclick = function () {
  var nKW = document.getElementById("input2_1").value * 1;

  var bill = 0;
  if (nKW <= 50) {
    bill = nKW * 500;
  } else if (50 < nKW && nKW <= 100) {
    bill = 50 * 500 + (nKW - 50) * 650;
  } else if (100 < nKW && nKW <= 200) {
    bill = 50 * 500 + 50 * 650 + (nKW - 100) * 850;
  } else if (200 < nKW && nKW <= 350) {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + (nKW - 200) * 1100;
  } else {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + 350 * 1100 + (nKW - 350) * 1300;
  }

  document.getElementById("output2").innerHTML =
    "Tổng tiền điện: <strong>" + bill + " đ</strong>";
  document.getElementById("output2").classList.add("showResult");
};
//Ex3
document.getElementById("run3").onclick = function () {
  var income = document.getElementById("input3_1").value * 1;
  var depend = document.getElementById("input3_2").value * 1;

  var tax = 0;

  var incomeTax = income - 4 - depend * 1.6;
  if (incomeTax <= 60) {
    tax = incomeTax * 0.05;
  } else if (incomeTax <= 120 && incomeTax > 60) {
    tax = 60 * 0.05 + (incomeTax - 60) * 0.1;
  } else if (incomeTax <= 210 && incomeTax > 120) {
    tax = 60 * 0.05 + 60 * 0.1 + (incomeTax - 120) * 0.15;
  } else if (incomeTax <= 384 && incomeTax > 210) {
    tax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (incomeTax - 210) * 0.2;
  } else if (incomeTax <= 624 && incomeTax > 384) {
    tax =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (incomeTax - 384) * 0.25;
  } else if (incomeTax <= 960 && incomeTax > 624) {
    tax =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      258 * 0.25 +
      (incomeTax - 624) * 0.3;
  } else if (incomeTax > 960) {
    tax =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      258 * 0.25 +
      336 * 0.3 +
      (incomeTax - 960) * 0.35;
  }

  var outputText = "Thuế TNCN: <strong>" + tax + " triệu vnđ</strong>";
  document.getElementById("output3").innerHTML = outputText;
  document.getElementById("output3").classList.add("showResult");
};
//Ex4

document.getElementById("run4").onclick = function () {
  var customerId = document.getElementById("input4_1").value;
  var nChannel = document.getElementById("input4_2").value * 1;
  var customerType = document.getElementById("input4_3").value;

  var bill = 0;
  if (customerType === "Cá Nhân") {
    bill = 4.5 + 20.5 + nChannel * 7.5;
  } else {
    var nLink = document.getElementById("input4_4").value * 1;
    if (nLink <= 10) {
      bill = 15 + 75 + nChannel * 50;
    } else {
      bill = 15 + 75 + (nLink - 10) * 5 + nChannel * 50;
    }
  }
  var result =
    "Khách Hàng " +
    customerId +
    " có hoá đơn tiền cáp là: <strong>" +
    bill +
    "</strong>$";
  document.getElementById("output4_1").innerHTML = result;

  document.getElementById("output4_1").classList.add("showResult");
  // document.getElementById("output4_2").classList.add('showResult');
};
