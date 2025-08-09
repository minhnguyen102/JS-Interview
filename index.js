// Bài 1
    // function TestVarletCont(){
    //     console.log(a) // undefind
    //     console.log(b) // Reference Error
    //     console.log(c) // Reference Error

    //     var a = 10;
    //     let b = 1;
    //     const c = 20;
    // }

    // TestVarletCont();
/**
 * var : có tính hoisting => a in ra 10
 * let và const cũng được  hoisting, nhưng không được khởi tạo (nằm trong vùng TDZ)
 * nếu chuyển var a thành let a => Reference Error
 * var: function scope
 * let, const : block scope
 */

// Bài 2
    // for(var i = 0; i < 3; i++){
    //     setTimeout(() => console.log(`var: ${i}`), 1000)
    // }

    // for(let i = 0; i < 3; i++){
    //     setTimeout(() => console.log(`let: ${i}`), 1000)
    // }
/**
 * for đầu : In ra 3 lần var: 3
 * for sau : In ra lần lượt let: 1, let: 2, let: 3
 * Giải thích: Biến var không có block scope => sau khi chạy xong 3 vòng lặp for => i = 3 mới chạy 3 hàm setTimeOut => 3 lần var: 3
 * biến let có block scope => mỗi lần lặp tạo 1 biến i riêng => in ra 3 lần let: 1 2 3 khác nhau 
 *
 * Kiến thức còn liên quan đến ghi nhớ Closure(Sẽ phải xem lại)
 */

// Bài 3 
    // const person = {
    //     name : "Minh"
    // }
    // person.name = "Bob"
    // console.log(person) // Bob

    // person = {name: "Charle", age : 18} 
    // console.log(person) // ErrorType

/**
 * Kiến thức liên quan đến Tham chiếu và tham trị
 * Khi ta thay đổi name = bob => tham trị, thay đổi giá trị của biến nguyên thủy (Được phép thay đổi)
 * không được phép gán lại giá trị của biến khai báo const
 */

// Bài 4: Hiểu rõ cơ chế hoisting của var, let, const
    // function hoistCheck(){
    //     if(true){
    //         var a = 10; 
    //         let b = 20;
    //     }
    //     console.log(a) // 10
    //     console.log(b) // Reference Error (Chưa khai báo)
    // }

    // hoistCheck()
/**
 * Giải thích: Biến var có tính chất function scope, mặc dù được khai báo trong block nhưng nó tìm ra ngoài phạm vi cho đến khi thấy được function scope
 * => a sẽ được hoisting lên đầu hàm
 * Biến let chỉ có tính block scope (Trong phạm vi khối if {} nên chỉ có thể truy cập bên trong khối if)
 */

// Bài 5:
    // let count = 10;

    // function shadowTest(){
    //     if(true){
    //         let count = 5;
    //         console.log(count) // 5
    //         count++; 
    //     }
    //     console.log(count) // 10
    // }
    // shadowTest();
/**
 * Biến count: biến count bên trong khối if có tính local: chỉ có thể truy cập trong khối if
 * biến count bên ngoài có tính global => có thể truy cập cả trong lẫn ngoài phạm vi hàm
 * 
 * biến count trong khối if shadow(che đi) biến count bên ngoài, sau khối if, biến shadow mất => biến count bên ngoài sẽ được sử dụng
 */

// Bài 6: Nội dung tham chiếu, Tham trị
    // console.log("Tham trị")
    // let x = 10;
    // let y = x; // tham trị
    // console.log(`x: ${x}`) // 10
    // console.log(`y: ${y}`) // 10

    // y = y + 10;
    // console.log(`x: ${x}`) // 10
    // console.log(`y: ${y}`) // 20

    // console.log("Tham chiếu")
    // let user1 = {
    //     name: "Minh"
    // }

    // let user2 = user1 // gán địa chỉ ô nhớ 1 vào biến user2
    // console.log(user2 == user1) // true : So sánh 2 ô nhớ giống nhau
    // user2.name = "Minh Nguyen"  
    // console.log(user1) // Minh Nguyen 

    // let user3 = {...user1} // đây là tạo 1 ô nhớ mới và giải tham chiếu(chỉ lấy nội dung)
    // console.log(user3 == user1) // false
    // user3.name = "Haha" // thay đổi nội dung của ô nhớ user3, không liên quan đến user1
    // console.log(user1)
    // console.log(user3)

/**
 * Tham trị: Dành cho các kiểu dữ liệu nguyên thủy (Chỉ lưu trữ 1 giá trị)
 * Tham chiếu: Dành cho các kiểu dữ liệu phức tạp (object, array, function)
 *              Biến tham chiếu lưu giữ địa chỉ ô nhớ
 */