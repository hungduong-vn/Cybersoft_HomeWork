var currentFormat = new Intl.NumberFormat('VN-vn');
//Ex1
document.getElementById("run1").onclick = function() {
    workDays = document.getElementById("input1").value;
    var salary = 100000 * workDays;
    salary = currentFormat.format(salary);
    var result = "Lương nhân viên: " + salary;
    document.getElementById("output1").innerHTML = result;
    document.getElementById("output1").classList.add("showResult");
}
//Ex2
document.getElementById("run2").onclick = function() {
    var a = Number(document.getElementById("input2_1").value);
    var b = Number(document.getElementById("input2_2").value);
    var c = Number(document.getElementById("input2_3").value);
    var d = Number(document.getElementById("input2_4").value);
    var e = Number(document.getElementById("input2_5").value);
    var GTTB = (a + b + c + d + e)/5;
    var result = "GTTB: " + GTTB;
    document.getElementById("output2").innerHTML = result;
    document.getElementById("output2").classList.add("showResult");
}
//Ex3
document.getElementById("run3").onclick = function(){
    var USD_cash = Number(document.getElementById("input3_1").value);
    var VND_cash = USD_cash * 23500;
    VND_cash = currentFormat.format(VND_cash);
    var result = USD_cash + " USD = " + VND_cash + " VND";
    document.getElementById("output3").innerHTML = result;
    document.getElementById("output3").classList.add("showResult");
}
//Ex4
document.getElementById("run4").onclick = function() {
    var width = Number(document.getElementById('input4_1').value);
    var height = Number(document.getElementById('input4_2').value);
    var area = width * height;
    var perimeter = (width + height) * 2;
    var result1 = "Chu vi: " + perimeter;
    var result2 = "Diện tích: " + area;
    document.getElementById("output4_1").innerHTML = result1;
    document.getElementById("output4_2").innerHTML = result2;

    document.getElementById("output4_1").classList.add('showResult');
    // document.getElementById("output4_2").classList.add('showResult');
}
//Ex 5
document.getElementById('run5').onclick = function(){
    var n = Number(document.getElementById("input5_1").value);

    var sumDigit = n%10 + (n - n%10)/10;
    var result = "Tổng 2 chữ số của n: " + sumDigit;
    document.getElementById("output5").innerHTML = result;
    document.getElementById("output5").classList.add("showResult");
}