let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                reject(new Error("Tham so phai la number PHEP CONG"));
            }
            resolve(a + b);
        }, 1000);
    });
};

let multipy = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                reject(new Error("Tham so phai la number PHEP NHAN"));
            }
            resolve(a * b);
        }, 1000);
    });
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number PHEP CHIA") {
                reject(new Error("Tham so phai la number"));
            }
            resolve(a / b);
        }, 1000);
    });
};

//Phuong thuc all
Promise.all([add("4", 5), multipy(4, 5)])
    // promise all này resovle khi add và multipy đều resolve
    .then((res) => console.log(res))
    // all sẽ reject khi add hoặc multipy bị reject
    // sẽ catch được đúng cái err của promise bị lỗi
    .catch((err) => console.log(err + ""));

// Phuong thuc race
Promise.race([add(4, 5), multipy(4, 5)])
    // cái nào trả về trước thì nó lấy cái đó
    // bất kể là resolve hay reject
    .then((res) => console.log(res))
    .catch((err) => console.log(err + ""));
