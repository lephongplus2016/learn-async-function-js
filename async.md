đồng bộ- bất đồng bộ là gì?
Trong ngôn ngữ lập trình:

-   Đồng bộ là các câu lệnh chạy theo thứ tự tuần tự từ trên xuống dưới
    code bên dưới chỉ chạy khi code bên trên đã chạy và trả về kết quả.
-   Bất đồng bộ thì ngược lại, các câu lệnh bên dưới có thể chạy trước khi câu lệnh bên trên trả về kết quả.
-   Trong javascript những bài code bình thường thì sẽ không nhận ra nó là ngôn ngữ bất đồng bộ.
-   Khi giải quyết nhiều vấn đề phức tạp, như thời gian load trang web, dữ liệu chẳng hạn,
    sẽ ra sao khi bạn cần tải một số lượng lớn các bản ghi hay up một file dung lượng lớn,
    chờ thực thi từng hành động mới xử lý tiếp sẽ mất rất nhiều thời gian,… => bất đồng bộ.
-   Để xử lý bất đồng bộ, các phương pháp js cung cấp là
    Callback------------------Promise-----------------------------async/await
