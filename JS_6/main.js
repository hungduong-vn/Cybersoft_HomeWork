var currentFormat = new Intl.NumberFormat("VN-vn");
//Ex1
document.getElementById("run1").onclick = function () {
  var n = 1;
  var sum = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
  document.getElementById("output1").innerHTML = "<strong>" + n + "</strong>";
  document.getElementById("output1").classList.add("showResult");
};
//Ex2
document.getElementById("run2").onclick = function () {
  var x = document.getElementById("input2_1").value * 1;
  var n = document.getElementById("input2_2").value * 1;
  var result = 0;
  for (var i=1; i<=n; i++){
    result += x**i;
  }
  document.getElementById("output2").innerHTML = result;
  document.getElementById("output2").classList.add("showResult");
};
//Ex3
document.getElementById("run3").onclick = function () {
  var n = document.getElementById("input3_1").value * 1;

  var gt = 1;
  for (var i=1; i<=n; i++){
    gt *= i;
  }
  document.getElementById("output3").innerHTML = gt;
  document.getElementById("output3").classList.add("showResult");
};
//Ex4
function lastChild(list){
  return list.children[list.children.length-1];
}
document.getElementById("run4").onclick = function () {
  var outputText = document.getElementById("output4_1");
  for (i = 1; i <= 10; i++) {
    outputText.appendChild(document.createElement('div'));
    var div = lastChild(outputText);
    div.style.width = '100%';
    div.style.height = '50px';
    if (i % 2 === 0) {
      div.style.backgroundColor = 'red';
    } else {
      div.style.backgroundColor = 'blue';
    }
    div.innerHTML = i;
    div.style.textAlign = 'center';
    div.style.lineHeight = '50px';
    div.style.color = 'white';
  }
  console.log(outputText);
  document.getElementById("output4_1").classList.add("showResult");
};
