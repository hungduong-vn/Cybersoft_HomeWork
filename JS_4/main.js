var currentFormat = new Intl.NumberFormat("VN-vn");
//Ex1
document.getElementById("run1").onclick = function () {
  var a = document.getElementById("input1").value;
  var b = document.getElementById("input2").value;
  var c = document.getElementById("input3").value;
  var outputText = "Dãy số tăng dần: ";
  if (a > b) {
    if (a > c) {
      b > c
        ? (result = c + " " + b + " " + a)
        : (result = b + " " + c + " " + a);
    } else {
      result = b + " " + a + " " + c;
    }
  } else {
    if (a > c) {
      result = c + " " + a + " " + b;
    } else {
      c > b
        ? (result = a + " " + b + " " + c)
        : (result = a + " " + c + " " + b);
    }
  }
  document.getElementById("output1").innerHTML =
    outputText + "<strong>" + result + "</strong>";
  document.getElementById("output1").classList.add("showResult");
};
//Ex2
document.getElementById("run2").onclick = function () {
  var name = document.getElementById("input2_1").value;
  var result = "Xin chào ";
  switch (name) {
    case "B":
      result += "Bố";
      break;
    case "M":
      result += "Mẹ";
      break;
    case "A":
      result += "Anh Trai";
      break;
    case "E":
      result += "Em Gái";
      break;
    default:
      break;
  }
  document.getElementById("output2").innerHTML = result;
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
