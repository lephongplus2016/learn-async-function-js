let mang = [1, 2, 3, 4, 5];

// sở dĩ làm được như vậy
// là do js xem function như là một đối tượng
// nên tất nhiên gán function cho một biến object bình thường
var x2 = (e) => e * 2;

var mangX2 = mang.map(x2);

console.log(mangX2);

let getFunction = (num) => {
    if (num > 0) return () => console.log("số dương");
    else if (num < 0) return () => console.log("số âm");
    return () => console.log("số 0");
};
// tại sao lại có 2 đấu () liên tục
// là do getFunction không tạo log, mà là trả về một hàm tạo log
// nhưng hàm đó được trả về, chứ đã được gọi thực thi đâu
getFunction(0)();
