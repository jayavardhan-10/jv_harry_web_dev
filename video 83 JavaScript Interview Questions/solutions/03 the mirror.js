// 03 The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = "jv123"
//we dont have direct method to reverse string
// you can split it to array, then REVERSE, then JOIN, then make it into string again
let str2 = str.split("").reverse().join("")
console.log(str+str2);

// console.log(typeof(str2));
//  typeof(str2)