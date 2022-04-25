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
  };
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
  };
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
  };
  var diemDT = tinhDiemDT(doiTuong);

  var diemFinal = diemThi + diemKV + diemDT;
  var kq = (diemFinal >= diemChuan) ? "Đậu" : "Rớt";
  var outputText = "Điểm Tổng Kết: " + "<strong>" + diemFinal + "</strong>" + "<br> => " + "<strong>" + kq + "</strong>";
  document.getElementById("output1").innerHTML = outputText;
  document.getElementById("output1").classList.add("showResult");
};
//Ex2
document.getElementById("run2").onclick = function () {
  var nKW = document.getElementById("input2_1").value * 1;

  var bill = 0;
  if (nKW <= 50){
    bill = nKW * 500;
  } else if (50 < nKW && nKW <= 100){
    bill = 50 * 500 + (nKW - 50) * 650;
  } else if (100 < nKW && nKW <= 200){
    bill = 50 * 500 + 50 * 650 + (nKW - 100) * 850;
  } else if (200 < nKW && nKW <= 350){
    bill = 50 * 500 + 50 * 650 + 100 * 850 + (nKW - 200) * 1100;
  } else {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + 350 * 1100 + (nKW - 350) * 1300;
  }

  document.getElementById("output2").innerHTML = "Tổng tiền điện: <strong>" + bill +" đ</strong>";
  document.getElementById("output2").classList.add("showResult");
};
//Ex3
function isEven(n) {
  return n % 2 === 0 ? true : false;
}

document.getElementById("run3").onclick = function () {
  var x = document.getElementById("input3_1").value * 1;
  var y = document.getElementById("input3_2").value * 1;
  var z = document.getElementById("input3_3").value * 1;

  var nOdd = 0;
  var nEven = 0;

  isEven(x) ? (nEven += 1) : (nOdd += 1);
  isEven(y) ? (nEven += 1) : (nOdd += 1);
  isEven(z) ? (nEven += 1) : (nOdd += 1);

  var outputText = "Có " + nEven + " số chẵn và " + nOdd + " số lẻ!";
  document.getElementById("output3").innerHTML = outputText;
  document.getElementById("output3").classList.add("showResult");
};
//Ex4
document.getElementById("run4").onclick = function () {
  var AB = document.getElementById("input4_1").value * 1;
  var AC = document.getElementById("input4_2").value * 1;
  var BC = document.getElementById("input4_3").value * 1;

  var result = "";
  if (AB === AC && AC === BC) {
    result = "Tam giác đều;";
  } else if (AB === AC || AB === BC || AC === BC) {
    result = " Tam giác cân";
  } else if (
    AB ** 2 === AC ** 2 + BC ** 2 ||
    AC ** 2 === AB ** 2 + BC ** 2 ||
    BC ** 2 === AB ** 2 + AC ** 2
  ) {
    result = "Tam giác vuông";
  } else {
    result = "Tam giác là tác giam!!!";
  }

  document.getElementById("output4_1").innerHTML = result;

  document.getElementById("output4_1").classList.add("showResult");
  // document.getElementById("output4_2").classList.add('showResult');
};
