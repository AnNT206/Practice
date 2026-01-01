// khởi tạo biến
let soA = 25;
let soB = 5;

// Cách xuất dữ liệu với biến
// CÁCH 1: Sử dụng console.log()
console.log("Can bac hai cua " + soA + " la: " + soB);
// CÁCH 2:
console.log("Can bac hai cua", soA, "la: ", soB);
// CÁCH 3:
console.log(`Can bac hai cua ${soA} la: ${soB}`);
// CÁCH 4:
console.log(`Can bac hai cua %s la: %s`, soA, soB);

// Ví dụ
let a = 4,
  b = 3,
  kq = a * b;
console.log("tich cua " + a + " va " + b + " la: " + kq);
console.log("tich cua", a, "va", b, "la:", kq);
console.log(`tich cua ${a} va ${b} la: ${kq}`);
console.log(`tich cua %s va %s la: %s`, a, b, kq);
