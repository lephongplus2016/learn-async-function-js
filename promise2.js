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
// khi promise nhận resolve và reject , nó sẽ return , không cần return nữa.
// thay vì đó lúc gọi new Promise nên return ngay

add("4", 5).then(
    (res) => console.log(res),
    (err) => console.log(err.toString())
);

// (4 +5) +6
// chạy đầu tiên
add(4, 5)
    //chạy thứ 2 - có res = 9
    .then(
        //promise lồng bên trong
        //chạy thứ 3
        (res) => add(res, 6),
        (err) => console.log(err + "")
    )
    //chạy thứ 4- có result  = 15 rồi
    .then(
        (result_4_plus_5) => console.log(result_4_plus_5),
        (err) => console.log(err + "")
    );
