// toán tử ++ dùng để tăng giá trị lên 1; -- để giảm giá trị đi 1
let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++; // tương đương a = a + 1
b--; // tương đương b = b - 1
++c; // tương đương c = c + 1
--d; // tương đương d = d - 1

// Xuất kết quả
console.log("Giá trị của a là: " + a);
console.log("Giá trị của b là: " + b);
console.log("Giá trị của c là: " + c);
console.log("Giá trị của d là: " + d);

// Ưu tiên tính toán postfix (hậu tố) trước prefix (tiền tố)
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
// B1: ++y => y = 2 (prefix)
// B2: x = 1, y = 3 => 1 - 3 + 1 = -1 (Các phép toán còn lại)
// B3: z = -1 (Gán giá trị cho biến ở bên trái dấu bằng)
// B4: x++ => x = 2 (postfix)

// Xuất kết quả
console.log("Giá trị của x là: " + x);
console.log("Giá trị của y là: " + y);
console.log("Giá trị của z là: " + z);
