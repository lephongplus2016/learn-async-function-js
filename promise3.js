// Tính diện tích hình thang bằng promise
// Khắc phục độ dài dòng của callback

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                reject(new Error("Tham so phai la number"));
            }
            resolve(a + b);
        }, 1000);
    });
};

let multipy = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                reject(new Error("Tham so phai la number"));
            }
            resolve(a * b);
        }, 1000);
    });
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                reject(new Error("Tham so phai la number"));
            }
            resolve(a / b);
        }, 1000);
    });
};

let tinhDienTich = (a, b, h) => {
    add(a, b)
        .then((res) => multipy(res, h))
        .then((result) => divide(result, 2))
        .then((square) => console.log("Dien tich la " + square))
        // catch để bắt lỗi của bất kì promise nào=> dừng ngay
        .catch((err) => console.log(Loi + "err"));
    // then sẽ xử lý hàm promise gần nhất của nó
};

tinhDienTich(6, 4, 5);
