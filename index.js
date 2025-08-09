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

// Day 2

// Bai 1: : So sánh == vs ===
    // console.log(0 == '0') // true
    // console.log(0 === '0') // false
    // console.log(false == '0') // true
    // console.log(false === '0') // false

/**
 * == và === khác nhau: 
 *  == : so sánh ép kiểu (đưa về kiểu dữ liệu rồi mới so sánh)
 *  === : so sánh không ép kiểu (không thực hiện chuyển kiểu dữ liệu. So sánh kiểu dữ liệu luôn)
 */

// Bai 2: Toán tử + và ép kiểu
    // console.log(1 + '2') // 12
    // console.log('2' + 1)  // 21
    // console.log(1 + 2 + '3') // 33
    // console.log('3' + 2 + 1) // 321
    // console.log(45 + 10 + "10") // 5510
    // console.log("10" - 5) // 5 

/**
 * Toán tử + là toán tử duy nhất vừa cộng số vừa nối chuỗi
 * Nếu có ít nhất 1 toán hạng kiểu chuỗi (string) => phép cộng sẽ thành nối chuỗi
 * Các toán tử khác đều biến chuỗi thành số nếu có thể 
 */


// Bài 3: So sánh mảng & object
    // console.log([] == []) // false
    // console.log([] === []) // false
    // console.log([1] == [1]) // flase
    // console.log({} == {}) // false

/**
 * False hết vì mảng lưu địa chỉ ô nhớ tham chiếu đến nó (bản chất là đang so sánh địa chỉ ô nhớ)
 * Mỗi mảng hoặc object mới sẽ có địa chỉ ô nhớ khác nhau => khi so sánh sẽ cho kết quả khác nhau
 */

// Bài 4: Toán tử logic & short-circuit
    // console.log(null || "hi") // true
    // console.log('' || undefined) // undefind
    // console.log(0 && "hi") // false
    // console.log("hello" && "hi") // true

/**
 * Liên quan đến các giá trị falsy và truthy 
 * Falsy gồm: 0, '', flase, null, undefined, NaN
 * && trả về falsy hoặc giá trị cuối cùng
 * || trả về truthy hoặc giá trị cuối cùng
 */

// Bài 5: Toán tử gán kết hợp
    // let x = 5;
    // x += 3;    // 8
    // x -= 2;    // 6
    // x *= 4;    // 24
    // x /= 2;    // 12
    // console.log(x); // 12

// Bài tập 1 – Câu lệnh if và ép kiểu
    // if ("0") {
    //   console.log("A");
    // } else {
    //   console.log("B");
    // } // A

    // if (0) {
    //   console.log("C");
    // } else {
    //   console.log("D");
    // } // D

    // if ([]) {
    //   console.log("E");
    // } else {
    //   console.log("F");
    // } // E

/**
 * A D E Vì "0" và [] không phải là falsy
 * 0 là falsy
 */

// Bài tập 2 – if...else if...else với giá trị falsy/truthy
    // let x = "5";
    // if (x == 5) {
    //     console.log("A");
    // } else if (x === 5) {
    //     console.log("B");
    // } else {
    //     console.log("C");
    // } // A

/**
 * ==: So sánh chuyển đổi "5" => 5 == 5 => true => A
 */

// Bài tập 3 – switch cơ bản
    // let fruit = "apple";
    // switch (fruit) {
    //   case "banana":
    //     console.log("Banana");
    //   case "apple":
    //     console.log("Apple");
    //   case "orange":
    //     console.log("Orange");
    //     break;
    //   default:
    //     console.log("Unknown");
    //  } // "Apple" "Orange"

/**
 * Vì ở case apple không có break => Tiếp tục nhảy xuống case dưới cho đến khi gặp break
 * switch dùng so sánh không chuyển đổi (so sánh chặt ===)
 */

// Bài tập 4 – switch với so sánh kiểu
    // let num = 10;
    // switch (num) {
    //   case "10":
    //     console.log("String 10");
    //     break;
    //   case 10:
    //     console.log("Number 10");
    //     break;
    //   default:
    //     console.log("Other");
    // } // Number 10

/**
 * Switch dùng so sánh không chuyển đổi (===) để kiểm tra case
 */

// Bài tập 5 – Ternary operator
    // let age = 20;
    // let canVote = age >= 18 ? "Yes" : "No";
    // console.log(canVote); // Yes

    // let canVote = "No"
    // if(age >= 18){
    //     canVote = "Yes"
    // }
    // console.log(canVote)

