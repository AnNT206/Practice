// 11. Các phép so sánh
let a = 1;
let b = 3;
let c = "3";

console.log(typeof a);
console.log(typeof c);

// Các phép so sánh thông thường giống toán học
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a != b);
console.log(b != c); // lưu ý

// So sánh bằng (==) (không quan tâm đến kiểu dữ liệu của biến)
console.log(a == b);
console.log(b == c); // true vì chỉ quan tâm đến giá trị của biến

// So sánh tuyệt đối (===) (so sánh cả giá trị và kiểu dữ liệu)
console.log(a === b);
console.log(b === c); // false vì kiểu dữ liệu khác nhau

// So sánh khác nhau (!=)
console.log("Phần 2");
console.log(a != b);
console.log(b != c); //không quan tâm đến kiểu dữ liệu

// So sánh khác nhau tuyệt đối (!==)
console.log(a !== b);
console.log(b !== c);
