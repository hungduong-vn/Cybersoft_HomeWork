function lastChild(list) {
  return list.children[list.children.length - 1];
}
function pushArray(btnPushId, arrayDivClass) {
  document.querySelector(btnPushId).onclick = function () {
    var newNum =
      document.querySelector(arrayDivClass + " .input input").value * 1;
    var arrayDiv = document.querySelector(arrayDivClass + " .array");
    arrayDiv.appendChild(document.createElement("span"));
    var newEle = lastChild(arrayDiv);
    newEle.innerHTML = newNum;
    newEle.classList.add("ml-2");
    newEle.classList.add("arrayEle");
  };
}
pushArray("#addNum", ".inputArray");
function getArray(arrayDivClass) {
  var arrayEle = document.querySelectorAll(arrayDivClass + " .arrayEle");
  var array = [];
  for (var i = 0; i < arrayEle.length; i++) {
    array.push(arrayEle[i].innerHTML * 1);
  }
  return array;
}
function positiveELe(array) {
  return array.filter(function (ele, id) {
    return ele > 0;
  });
}
function negativeEle(array) {
  return array.filter(function (ele, id) {
    return ele < 0;
  });
}
//Ex1: Sum of positive num
document.getElementById("run1").onclick = function () {
  var array = getArray(".inputArray");
  var positiveArray = positiveELe(array);
  var sum = 0;
  for (var i = 0; i < positiveArray.length; i++) {
    sum += positiveArray[i];
  }
  document.querySelector("#bai1 .result").innerHTML = sum;
};
//Ex2: Count positive num
document.getElementById("run2").onclick = function () {
  var array = getArray(".inputArray");
  var positiveArray = positiveELe(array);
  document.querySelector("#bai2 .result").innerHTML = positiveArray.length;
};
//Ex3: Find min
document.getElementById("run3").onclick = function () {
  var array = getArray(".inputArray");

  var minNum = array[0];
  for (var i = 0; i < array.length; i++) {
    if (minNum > array[i]) {
      minNum = array[i];
    }
  }
  document.querySelector("#bai3 .result").innerHTML = minNum;
};
//Ex4: Find positive min
document.getElementById("run4").onclick = function () {
  var array = getArray(".inputArray");
  var positiveArray = positiveELe(array);

  var minNum = positiveArray[0];
  for (var i = 0; i < positiveArray.length; i++) {
    if (minNum > positiveArray[i]) {
      minNum = positiveArray[i];
    }
  }
  document.querySelector("#bai4 .result").innerHTML = minNum;
};
//Ex5: Find the last even num in array (return -1 if there is none)
document.getElementById("run5").onclick = function () {
  var array = getArray(".inputArray");

  var evenArray = array.filter(function (ele, id) {
    return ele % 2 === 0;
  });
  if (evenArray.length === 0) {
    var result = -1;
  } else {
    var result = evenArray[evenArray.length - 1];
  }
  document.querySelector("#bai5 .result").innerHTML = result;
};
//Ex6: Switch 2 num given their indices
function switch2Ele(array, id1, id2) {
  var temp = array[id1];
  array[id1] = array[id2];
  array[id2] = temp;
  return array;
}
document.getElementById("run6").onclick = function () {
  var array = getArray(".inputArray");

  var num1Id = document.getElementById("input6_1").value * 1;
  var num2Id = document.getElementById("input6_2").value * 1;

  array = switch2Ele(array, num1Id, num2Id);

  document.querySelector("#bai6 .result").innerHTML = array;
};
//Ex7: Ascending sort
document.getElementById("run7").onclick = function () {
  var array = getArray(".inputArray");

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        array = switch2Ele(array, i, j);
      }
    }
  }
  document.querySelector("#bai7 .result").innerHTML = array;
};
//Ex8: Find the first prime num in array
function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
document.getElementById("run8").onclick = function () {
  var array = getArray(".inputArray");
  var result = -1;

  for (var i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      result = array[i];
      break;
    }
  }
  document.querySelector("#bai8 .result").innerHTML = result;
};
//Ex9: Count integers
pushArray("#addNum9", ".inputArray9");
document.getElementById("run9").onclick = function () {
  var newArray = getArray(".inputArray9");

  var result = 0;
  newArray.forEach(function (ele, id) {
    if (Number.isInteger(ele)) {
      result++;
    }
  });
  document.querySelector("#bai9 .result").innerHTML = result;
};
//Ex10: Check if countEven > countOdd
document.getElementById("run10").onclick = function () {
  var array = getArray(".inputArray");
  var result = "";

  var posArray = positiveELe(array);
  var negArray = negativeEle(array);
  if (posArray.length > negArray.length) {
      result = ">";
  } else if (posArray.length < negArray.length){
      result = "<";
  } else {
      result = '=';
  }
  var outputText = "Số lượng số dương " + result + " Số lượng số âm";
  document.querySelector("#bai10 .result").innerHTML = outputText;
};
