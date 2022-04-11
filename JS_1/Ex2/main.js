// Ex2
/*
- Input: 5 số thực (VD: a, b, c, d, e)
- Output: giá trị trung bình của 5 số này (VD: GTTB)
- Thuật toán: GTTB = (a + b + c + d + e)/5
*/
var a = Number(prompt("Enter 1st number"));
var b = Number(prompt("Enter 2nd number"));
var c = Number(prompt("Enter 3rd number"));
var d = Number(prompt("Enter 4th number"));
var e = Number(prompt("Enter 5th number"));
var result = (a + b + c + d + e)/5;
console.log("Mean of 5 real numbers: " + result);