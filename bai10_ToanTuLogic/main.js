// Toán tử logic && (AND)
let i = 7;
console.log(i > 0 && i < 10);

// Toán từ logic || (OR)
console.log(i > 0 || i < 10);

// Toán từ logic ! (NOT)
console.log(!(i > 0 && i < 10));

// 1. Tính chu vi, diện tích hình tròn

// Xuất thông báo cho người dùng nhập bán kính
let r = Number(prompt("Nhập bán kính đường tròn: "));
let PI = Math.PI; // khái báo biến PI bằng hàm Math
let cv = 2 * PI * r;
let dt = PI * Math.pow(r, 2);

// xuất kết quả
console.log("Chu vi = " + cv);
console.log("Diện tích = " + dt);

/* 2. Tính chu vi, diện tích hình chữ nhật
a. Viết chương trình nhập vào 2 số thực dương a, b từ bàn phím
   a, b lần lượt là chiều dài và chiều rộng của hình chữ nhật
b. In ra màn hình chu vi và diện tích của hình chữ nhật đó
*/

// Xuất thông báo cho người dùng nhập chiều dài và chiều rộng
let a = Number(prompt("Nhập chiều dài của hình chữ nhật: "));
let b = Number(prompt("Nhập chiều rộng của hình chữ nhật: "));
let CV = 2 * (a + b);
let DT = a * b;

// Xuất kết quả
console.log(`Chu vi = ${CV}`);
console.log(`Chu vi = %s`, DT);

// 3.Xuất kêt quả làm tròn 2 chữ số sau dấu phẩy
let diemToan = Number(prompt("Nhập điểm môn Toán: "));
let diemVan = Number(prompt("Nhập điểm môn Văn: "));
let diemAnh = Number(prompt("Nhập điểm môn Anh: "));

let dtb = (diemToan + diemVan + diemAnh) / 3;
console.log("Điểm trung bình: " + dtb.toFixed(2));
