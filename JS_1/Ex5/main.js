//Ex5
/*
- Input: 2-digit number (n);
- Output: Sum of 2 digits in "n" (sumDigit)
- Algorithm: sumDigit = n%10 + (n - n%10)/10;
*/
var n = 12;
var sumDigit = n%10 + (n - n%10)/10;
console.log("Tổng 2 chữ số của " + n + " là: " + sumDigit);