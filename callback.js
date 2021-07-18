let add = (a, b, cb) => {
    setTimeout(() => {
        // khai báo như này sẽ tự hiểu là undefine
        if (typeof a != "number" || typeof b != "number") {
            return cb(new Error(" Tham so phai la number"));
        }
        cb(undefined, a + b);
        // rõ ràng ko có return nhưng hàm callback được trả về thay cho return ấy
    }, 1000);
};

// add(4, 5, (e, re) => {
//     if (e) {
//         return console.log(e);
//     }
//     return console.log("Ket qua la :" + re);
//     // kết quả và re của callback
// });

// callback là một hàm truyền vào như một parameter ;
// callback có param như thế nào, là do mình tự định nghĩa,
// định nghĩa hàm callback có thể viết sau như ở trên,
// trong hàm callback thì hàm gốc chứa callback ko cần giá trị return nữa,
// ta tự định nghĩa biến chứa giá trị trả về là result như trên,

// Để rõ hơn callback hell, ta sẽ dùng nhiều hàm để tính diện tích hình thang.

let multiply = (a, b, cb) => {
    setTimeout(() => {
        // khai báo như này sẽ tự hiểu là undefine
        if (typeof a != "number" || typeof b != "number") {
            return cb(new Error(" Tham so phai la number"));
        }
        cb(undefined, a * b);
        // rõ ràng ko có return nhưng hàm callback được trả về thay cho return ấy
    }, 1000);
};

let divide = (a, b, cb) => {
    setTimeout(() => {
        // khai báo như này sẽ tự hiểu là undefine
        if (typeof a != "number" || typeof b != "number") {
            return cb(new Error(" Tham so phai la number"));
        }
        cb(undefined, a / b);
        // rõ ràng ko có return nhưng hàm callback được trả về thay cho return ấy
    }, 1000);
};

// hàm này dùng callback lồng nhau
// result của callback này chính là param của callback khác
let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if (err) return cb(err);
        multiply(result, h, (err, result) => {
            if (err) return cb(err);
            divide(result, 2, (err, result) => {
                if (err) return cb(err);
                cb(undefined, result);
            });
        });
    });
};

// nhớ là nội dung code của callback lúc gọi hàm chính mới viết
tinhDienTichHinhThang(2, "3", 2, (err, result) => {
    if (err) return console.log(err + "");
    //+'' để chuyển thành string
    else return console.log("Dien tich hinh thang la " + result);
});

// function này sẽ tốn bao nhiêu thời gian để chạy?
