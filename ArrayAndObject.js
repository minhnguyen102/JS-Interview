// Bai 1
    // const arr = [1, 2, 3];
    // arr[10] = 99;
    // console.log(arr.length); // 11 length không phải số lượng phần tử thật mà chỉ là chỉ số lớn nhất + 1
    // console.log(arr[5]);  // undefined

/**
 * arr[10] => tự động mở rộng mảng đến chi số 10
 * arr[3] -> arr[9]: undefined (empty slots)
 */


// Bai 2
    // console.log([1, 2] == [1, 2]); // false
    // // console.log([1, 2] === [1, 2]); // false

    // const a = [1, 2];
    // const b = a; // b và a cùng tham chiếu đến một địa chỉ 
    // console.log(a === b); // true

/**
 * So sánh địa chỉ tham chiếu đến mảng chứ không so sánh nội dung mảng 
 */

// Bai 3
    // const arr1 = [1, 2];
    // const arr2 = arr1;
    // const arr3 = [...arr1];

    // arr2.push(3); 
    // arr3.push(4);

    // console.log(arr1); // [1 2 3]
    // console.log(arr2); // [1 2 3]
    // console.log(arr3); // [1 2 4]

/**
 * mảng 1 và 2 cùng tham chiếu đến 1 địa chỉ => 1 thay đổi thì 2 cũng thay đổi
 * mảng 3 chỉ giải tham chiếu (lấy nội dung của mảng một), mảng 3 có địa chỉ tham chiếu khác hoàn toàn với mảng 1 2. 
 * Mảng 3 thay đổi không làm thay đổi nội dung mảng 1 2
 */

// Bai 4
    // const obj = {};
    // obj[1] = "one"; // tự động ép key 1 từ dạng number về string
    // obj["1"] = "ONE"; // ghi đè lên key "1" one -> ONE

    // console.log(obj[1]); // ONE
    // console.log(Object.keys(obj));  "1"

/**
 * Key trong object luôn là string 
 */

// Bài 5
    // const user = { profile: { name: "Alice" } };
    // console.log(user.profile?.name); // Alice
    // console.log(user.account?.balance); // undefined

// Bài 6
    // const person = { name: "Bob", age: 25, job: null };
    // const { name: n, age: a, job = "Developer" } = person;
    // console.log(n, a, job); // Bob, 25, null

/**
 * Nếu lấy giá trị không có trong objject => nhận giá trị khởi tạo làm giá trị
 * nhưng nếu giá trị trong object là null => nhân null làm giá trị chứ không lấy giá trị khởi tạo
 */

// Bài 7 
    // const user = {
    //   name: "Alice",
    //   age: 25,
    //   password: "123456"
    // };

    // function removePassword(obj) {
    //   // Viết code trả về object mới không có key 'password'
    //     const {password, ...newData} = user
    //     return newData
    // }

    // console.log(removePassword(user));
    // console.log(user)

/**
 * Không nên xóa trực tiếp bằng cách delete obj.password => xóa luôn trên data gốc
 */

// Array
// Bài 1 – map
    // const nums = [1, 2, 3, 4];
    // const newNums = nums.map((item, index) => item * item)
    // console.log(newNums)

//Bài 2 – filter
    // const ages = [16, 21, 18, 30, 15];
    // adusts = ages.filter(item => item >= 18)
    // console.log(adusts)

// Bài 3 – reduce
    // const prices = [10, 20, 30];
    // const sum = prices.reduce((total, item) => total + item, 0)
    // console.log(sum)

// Bài 4 – find
    // const users = [
    //   { id: 1, name: "Alice" },
    //   { id: 2, name: "Bob" },
    //   { id: 3, name: "Charlie" }
    // ];

    // console.log(users.find(item => item.id === 2))

// Bài 5 – some & every
    // const numbers = [2, 4, 6, 8];
    // const flag = numbers.some(item => item % 2 === 1)
    // console.log(flag) // false
    // console.log(numbers.every(item => item % 2 === 0)) // true



