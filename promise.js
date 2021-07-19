let pr = new Promise((resolve, reject) => {
    //resolve("Thanh cong");
    reject("Khong the ket noi den server");
});
// resolve và reject là 2 điều kiện của promise
// tuy nhiên nó chỉ nhận một trong hai

// function then() này:
// sẽ chạy nếu promise có một resolve
pr.then(
    //handle resolve
    (msg) => console.log("Da chay promise: " + msg),
    //handle rejections
    (errMess) => console.log(errMess)
);

//khi có reject, thì function then() sẽ gọi handle

//Tóm lại promise là một hàm mà lỗi hay kết quả, chỉ một cái được trả về.
// Đây chính là sự khác biệt với callback, trong khi callback cả error và result đều đc trả về
