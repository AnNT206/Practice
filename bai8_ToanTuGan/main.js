// 1.Toán tư gán (=) dùng để gán giá trị cho biến
let x = 10; // Biến x được gán giá trị bằng 10
let y = 5; // Biến y được gán giá trị bằng 5
let z = x + y; // Biến z được gán giá trị bằng tổng của x và y

// Gán +=, -=, *=, /=, %=
console.log("Kết quả gán +=, -=, *=, /=, %=:");
let m = 10;
m += 5; // Tương đương với m = m + 5
console.log("m += 5:", m);

let n = 8;
n -= 3; // Tương đương với n = n - 3
console.log("n -= 3:", n);

let p = 6;
p *= 2; // Tương đương với p = p * 2
console.log("p *= 2:", p);

let q = 9;
q /= 3; // Tương đương với q = q / 3
console.log("q /= 3:", q);

let r = 4;
r %= 3; // Tương đương với r = r % 3
console.log("r %= 3:", r);

//Bài tập:
// 1.
let a = 7;
a += 3;
console.log("a =", a);

// 2. b = 15, b -= 6;
let b = 15;
b -= 6;
console.log(`b = ${b}`);

// 3. c = 5, c *= 4;
let c = 5;
c *= 4;
console.log(`c = %s`, c);

// 4. e = 5, f = 2 rút gọn biểu thức e = e-(f+1)
let e = 5;
let f = 2;
e -= f + 1;
console.log(`e = %s`, e);
