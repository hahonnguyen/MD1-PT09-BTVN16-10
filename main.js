// Bài 1: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// input: 2,3,5,4,1
// output: 1,2,3,4,5
// function sortArr(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//        for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
        
//        }
        
//     }
//     return arr.join(',');
// }
// let input = prompt('Nhap vao chuoi so');
// let toArr = input.split(',');
// console.log(sortArr(toArr));



// Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
// input: "Hello World"
// output: 11

// function calculateString(string) {
//     let strLength = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== undefined) {
//             strLength++
//         }
        
//     }
//     return strLength;
// }
// let input = prompt('Nhap vao mot chuoi')
// console.log(calculateString(input));



// Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
// input: "thịnh"
// output: "THỊNH"
// function toUpercase(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].toUpperCase());
//     }
//     return newArr
// }
// let input = prompt('Nhap vao mot chuoi');
// let arr = input.split(',');
// console.log(toUpercase(arr));



// Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
// input: "Khanh"
// output: "hnahK"
// function isReverse(string) {
//     let reverseString = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverseString += string[i];
        
//     }
//     return reverseString;
// }
// let input = prompt('Nhap vao chuoi');
// console.log(isReverse(input));



// Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
// input: 1,2,3,4,5,6,7,8
// output: 2,3,5,7

// function createPrimeArr() {
// let parentArr = [1,2,3,4,5,6,7];
// let arr = [];

//     function checkPrime(num) {
//         if (num <= 1) {
//             return false;
//         }
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
            
//         }
//         return true;
//     }

//     for (let i = 0; i < parentArr.length; i++) {
//         if (checkPrime(parentArr[i])) {
//             arr.push(parentArr[i]);
//         }
        
//     }
//     return arr;
// }
// console.log(createPrimeArr());