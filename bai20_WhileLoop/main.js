// While Loop
// Bài tập: tính giai thừa của 1 số nguyên
console.log("=== Tính giai thừa của 1 số nguyên ===");
let n = Number(prompt("Nhập số n: "));
let i = 1;
let factorial = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(`Giai thừa của ${n} là: ${factorial}`);

// Bài tập: in các số từ 1 đến n
console.log("=== In các số từ 1 đến n ===");
let num = Number(prompt("Nhập số n: "));
let count = 1;
while (count <= num) {
  console.log(count);
  count++;
}

// Bài tập 3: Kiểm tra 1 số nhập vào trong khoảng 1 đến 99
console.log("=== Kiểm tra số trong khoảng 1 đến 99 ===");
let num1 = Number(prompt("Nhập số từ 1 đến 99: "));
console.log(num1);
while (num1 < 1 || num1 > 99 || num1 % 1 !== 0) {
  num1 = Number(prompt("Nhập sai! Vui lòng nhập số từ 1 đến 99: "));
}
alert(`Bạn đã nhập đúng số: ${num1}`);
