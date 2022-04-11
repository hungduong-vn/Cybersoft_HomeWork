// Ex 1
/*
- Input: Số ngày làm
- Output: Lương nhân viên
- Thuật toán: Lương nhân viên = Lương_ngày * Số_ngày_làm = 100.000 * Số_ngày_làm
 */

    const workDays = Number(prompt("Please enter the employee's total working days"));
    var salary = 100000 * workDays;
    console.log("Your salary is: " + salary);
