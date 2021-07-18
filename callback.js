let add = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        // khai báo như này sẽ tự hiểu là undefine
        if (typeof a != "number" || typeof b != "number") {
            err = " Tham so phai la number";
            return cb(err, result);
        }
        result = a + b;
        cb(err, result);
        // rõ ràng ko có return nhưng hàm callback được trả về thay cho return ấy
    }, 1000);
};

add(4, "a", (e, re) => {
    if (e) {
        return console.log(e);
    }
    console.log("Ket qua la :" + re);
    // kết quả và re của callback
});

// callback là một hàm truyền vào như một parameter ;
// callback có param như thế nào, là do mình tự định nghĩa,
// định nghĩa hàm callback có thể viết sau như ở trên,
// trong hàm callback thì hàm gốc chứa callback ko cần giá trị return nữa,
// ta tự định nghĩa biến chứa giá trị trả về là result như trên,
