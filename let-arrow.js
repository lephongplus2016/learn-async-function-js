// let a = 10;
// console.log(a);

// if (true) {
//     let b = 5;
// }

// console.log("b = " + b);

// câu lệnh không chạy
// vì let chặt chẽ hơn var
// trong es6, xuất hiện từ khóa let và arrow
// nó nói rằng let thì đó là một biến cục bộ, có scope giới hạn.
// Còn var lại là biến toàn cục như ví dụ trên.

// ví dụ về arrow function
let mang = [1, 2, 3, 4, "năm"];

// mang.forEach(function (e) {
//     console.log(e);
// });

mang.forEach((e) => console.log(e));

// => sẽ thay cho function
// e chính là param của funcion, nếu chỉ có 1 dòng lệnh thì không cần bao trong {}

// var mangX2 = mang.map(function (e) {
//     return e * 2;
// });

var mangX2 = mang.map((e) => e * 2);

console.log(mangX2);
