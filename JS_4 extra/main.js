var currentFormat = new Intl.NumberFormat("VN-vn");
//Ex1
function nextDay(d, m, y) {
  var dNext = d + 1;
  var mNext = m;
  var yNext = y;
  return dNext + "/" + mNext + "/" + yNext;
}
function preDay(d, m, y) {
  var dPre = d - 1;
  var mPre = m;
  var yPre = y;
  return dPre + "/" + mPre + "/" + yPre;
}
function nextDayOfNextMonth(d, m, y) {
  var dNext = 1;
  var mNext = m + 1;
  var yNext = y;
  return dNext + "/" + mNext + "/" + yNext;
}
document.getElementById("run1").onclick = function () {
  var d = document.getElementById("input1_1").value * 1;
  var m = document.getElementById("input1_2").value * 1;
  var y = document.getElementById("input1_3").value * 1;

  var dPre = 0;
  var mPre = 0;
  var yPre = 0;
  var dNext = 0;
  var mNext = 0;
  var yNext = 0;

  var dateNext = "";
  var datePre = "";
  if (
    (d < 28 && d > 1) ||
    ((d === 28 || d === 29) && m !== 2) ||
    (d === 30 && m !== 4 && m !== 6 && m !== 9 && m !== 11)
  ) {
    datePre = preDay(d, m, y);
    dateNext = nextDay(d, m, y);
  } else {
    if (m === 1) {
      if (d === 1) {
        dPre = 31;
        mPre = 12;
        yPre = y - 1;
        datePre = dPre + "/" + mPre + "/" + yPre;
        dateNext = nextDay(d, m, y);
      } else if (d === 31) {
        datePre = preDay(d, m, y);
        dateNext = nextDayOfNextMonth(d, m, y);
      }
    } else if (m === 2) {
      if (d === 1) {
        dPre = 31;
        mPre = m - 1;
        yPre = y;
        datePre = dPre + "/" + mPre + "/" + yPre;
        dateNext = nextDay(d, m, y);
      } else if (d === 28) {
        datePre = preDay(d, m, y);
        dateNext = nextDayOfNextMonth(d, m, y);
      }
    } else if (m === 3) {
      if (d === 1) {
        dPre = 28;
        mPre = m - 1;
        yPre = y;
        datePre = dPre + "/" + mPre + "/" + yPre;
        dateNext = nextDay(d, m, y);
      } else if (d === 31) {
        datePre = preDay(d, m, y);
        dateNext = nextDayOfNextMonth(d, m, y);
      }
    } else if (m === 12) {
      if (d === 1) {
        dPre = 30;
        mPre = m - 1;
        yPre = y;
        datePre = dPre + "/" + mPre + "/" + yPre;
        dateNext = nextDay(d, m, y);
      } else if (d === 31) {
        datePre = preDay(d, m, y);
        dNext = 1;
        mNext = 1;
        yNext = y + 1;
        dateNext = dNext + "/" + mNext + "/" + yNext;
      }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
      if (d === 1) {
        dPre = 31;
        mPre = m - 1;
        yPre = y;
        datePre = dPre + "/" + mPre + "/" + yPre;
        dateNext = nextDay(d, m, y);
      } else if (d === 30) {
        datePre = preDay(d, m, y);
        dateNext = nextDayOfNextMonth(d, m, y);
      }
    } else {
      yPre = y;
      if (d === 1) {
        if (m === 8) {
          dPre = 31;
          mPre = m - 1;
          datePre = dPre + "/" + mPre + "/" + yPre;
          dateNext = nextDay(d, m, y);
        } else {
          dPre = 20;
          mPre = m - 1;
          datePre = dPre + "/" + mPre + "/" + yPre;
          dateNext = nextDay(d, m, y);
        }
      } else if (d === 31) {
        datePre = preDay(d, m, y);
        dateNext = nextDayOfNextMonth(d, m, y);
      }
    }
  }

  document.getElementById("output1").innerHTML =
    "Ngày Hôm Trước: " + datePre + "<br> Ngày Hôm Sau: " + dateNext;
  document.getElementById("output1").classList.add("showResult");
};
//Ex2
document.getElementById("run2").onclick = function () {
  var m = document.getElementById("input2_1").value * 1;
  var y = document.getElementById("input2_2").value * 1;

  var n = 0;

  if (m === 2) {
    if (y % 100 === 0) {
      n = y % 400 === 0 ? 29 : 28;
    } else if (y % 4 === 0) {
      n = 29;
    } else {
      n = 28;
    }
  } else if (m === 4 || m === 6 || m === 9 || m === 11) {
    n = 30;
  } else {
    n = 31;
  }

  document.getElementById("output2").innerHTML =
    "Tháng " + m + ", năm " + y + " có " + n + " ngày.";
  document.getElementById("output2").classList.add("showResult");
};
//Ex3
function spell_1(x) {
  switch (x) {
    case 1:
      return "Một";
    case 2:
      return "Hai";
    case 3:
      return "Ba";
    case 4:
      return "Bốn";
    case 5:
      return "Năm";
    case 6:
      return "Sáu";
    case 7:
      return "Bảy";
    case 8:
      return "Tám";
    case 9:
      return "Chín";
    default:
      break;
  }
}
function spellTen(x){
  switch (x) {
    case 0:
      return "Lẻ";
    case 1:
      return "Mười"
    default:
      return spell_1(x) + " Mươi";
  }
}

document.getElementById("run3").onclick = function () {
  var x = document.getElementById("input3_1").value * 1;

  var h = Math.floor(x/100);
  var u = (x%100)%10;
  var t = (x - h*100 - u)/10;

  var result = spell_1(h) + " Trăm";

  if(u === 0){
    if (t === 0){
      result = result;
    }
    else {
      result += " " + spellTen(t);
    }
  } else if (u === 5){
    result += " " + spellTen(t) + " Lăm";
  } else {
    result += " " + spellTen(t) +" "+ spell_1(u);
  }

  document.getElementById("output3").innerHTML = result;
  document.getElementById("output3").classList.add("showResult");
};
//Ex4
function EuclideanDistance(Ax, Ay, Ux, Uy){
  return Math.sqrt((Ax-Ux)**2 + (Ay-Uy)**2);
}
document.getElementById("run4").onclick = function () {
  var Ax = document.getElementById("input4_1").value * 1;
  var Ay = document.getElementById("input4_2").value * 1;
  var Bx = document.getElementById("input4_3").value * 1;
  var By = document.getElementById("input4_4").value * 1;
  var Cx = document.getElementById("input4_5").value * 1;
  var Cy = document.getElementById("input4_6").value * 1;
  var Ux = document.getElementById("input4_7").value * 1;
  var Uy = document.getElementById("input4_8").value * 1;

  var Ad = EuclideanDistance(Ax, Ay, Ux, Uy);
  var Bd = EuclideanDistance(Bx, By, Ux, Uy);
  var Cd = EuclideanDistance(Cx, Cy, Ux, Uy);
  
  var closestStudent = "";
  if (Ad <= Cd){
    closestStudent = (Bd <= Cd) ? "C" : "B";
  } else {
    closestStudent = (Ad <= Bd) ? "B" : "A";
  }

  document.getElementById("output4_1").innerHTML = closestStudent + " xa ĐH nhất";
  document.getElementById("output4_1").classList.add("showResult");
  // document.getElementById("output4_2").classList.add('showResult');
};
