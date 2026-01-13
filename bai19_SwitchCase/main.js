// Switch case
// let number = "abc";
// switch (number % 2) {
//   case 0:
//     console.log("Số chẵn");
//     break;
//   case 1:
//     console.log("Số lẻ");
//     break;
//   default:
//     console.log("Không phải số");
//     break;
// }

// Bài tập 1: nhập tháng và in ra số ngày tương ứng
// let month = Number(prompt("Nhập tháng (1-12):"));
// let nam = Number(prompt("Nhập năm:"));
// let day;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Tháng " + month + " có 31 ngày");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Tháng " + month + " có 30 ngày");
//     break;
//   case 2:
//     if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//       console.log("Tháng " + month + " có 29 ngày");
//     } else {
//       console.log("Tháng " + month + " có 28 ngày");
//     }
//     break;
//   default:
//     console.log("Tháng không hợp lệ");
//     break;
// }

// Bài tập 2: làm menu
let choice = Number(
  prompt(
    "Chọn cách tìm kiếm: \n1. Tìm theo tên\n2. Tìm theo tác giả\n3. Tìm theo nhà xuất bản\n4. Tìm theo tiêu đều"
  )
);

switch (choice) {
  case 1:
    alert("Bạn chọn tìm theo tên");
    break;
  case 2:
    alert("Bạn chọn tìm theo tác giả");
    break;
  case 3:
    alert("Bạn chọn tìm theo nhà xuất bản");
    break;
  case 4:
    alert("Bạn chọn tìm theo tiêu đề");
    break;
  default:
    alert("Lựa chọn không hợp lệ!");
    break;
}
