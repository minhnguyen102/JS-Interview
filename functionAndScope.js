// Bai 1
    // console.log(sum(2, 3)); // 5
    // function sum(a, b) {
    //   return a + b;
    // }

/**
 * Declaration có tính hoisting: Có thể sử gọi trước khi bao báo
 * Bản chất hàm sẽ được đẩy lên đầu chương trình
 */

// Bài 2 
    // console.log(multiply(2, 3)); // is not a function
    // var multiply = function(a, b) {
    //   return a * b;
    // }

/**
 * Expression function không có tính hoisting 
 * Giống như biến let và const (được hoisting nhưng ở trong vùng temp dead zone) => Không được truy cập trước khi khai báo
 */

// Bai 3 
    // let a = 10;
    // function test() {
    //     console.log(a); // ReferenceError : Vì là biết let
    //     let a = 5; // block scope, shadowing (tạm thời che đi biến a bên ngoài khối)
    // }
    // test();

/**
 * ReferenceError: Biến let không thể truy cập vào trước khi khai báo
 */

// Closure
// Kiến thức cần có: Local, global variable
    // function add(){
    //     let counter = 0; 
    //     return function plus(){
    //         counter++;
    //         return counter
    //     }
        
    // }

    // const cnt = add() // Biến counter chỉ khởi tạo 1 lần, trả về hàm plus (https://www.w3schools.com/js/js_function_closures.asp)
    // console.log(cnt())
    // console.log(cnt())
    // console.log(cnt())

// Bai 4
    // function outer() {
    //     let count = 0;
    //     return function inner() {
    //         count++;
    //         return count;
    //     }
    // }
    // let counter = outer();
    // console.log(counter()); // 1
    // console.log(counter()); // 2
    // console.log(counter()); // 3

/**
 * Closure: 1 hàm có thể truy cập, nhớ được tài nguyên(biến) của hàm cha, mặc dù hàm đó đã kết thúc
 * counter = onner() => Khai báo biến count 1 lần duy nhất +  trả về hàm inner
 * counter() <=> inner() => biến count được tham chiếu bên trên, lưu trữ giá trị và trả về
 */










