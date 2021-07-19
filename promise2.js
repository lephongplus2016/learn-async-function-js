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
