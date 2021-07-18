setTimeout(() => {
    console.log("Da het 1 giay");
}, 1000);
// setTimeOut là một tác vụ bất đồng bộ, nên dù time =0 thì nó vẫn chạy sau .

// nguyên tắc xác định một tác vụ đồng bộ hay không đồng bộ là dựa trên doc nodejs.org .
// Đa số tác vụ load web, load file , load database sẽ là bất đồng bộ

console.log("Ket thuc");
