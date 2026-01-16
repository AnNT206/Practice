// Kiểm soát và thoát khỏi vòng lặp vô tận
// Tăng n lên cho đến khi n = 10
let n = 0;
while (true) {
  n++;
  alert(n);
  if (n === 10) {
    break; // Thoát khỏi vòng lặp khi n bằng 10
  }
}
/* 
while (true) cho phép tạo vòng lặp vô tận.
Nếu muốn dừng phải dùng điều kiện để ngắt/dừng vòng lặp.
*/
