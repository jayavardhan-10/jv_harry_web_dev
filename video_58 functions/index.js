// function nice(name) {
//     console.log("hello "+name+" welcome here");
//     console.log("hello "+name+" welcome to 2nd line");
//     console.log("hello "+name+" welcome to 3rd line");
// }
// nice(1)
// nice(true)
// nice(null)
// nice("jv")

function sum(a,b) {
    console.log(a+b);
}
sum(3,4);

function sum1(a,b) {
    // console.log(a+b);
    return (a+b);
}
let result = sum1(10,20);
console.log(result);

//default c value 
// if you give c fine
// else c=3 is used
function sum2(a,b,c=3) {
    // console.log(a+b);
    return (a+b+c);
}
let result2 = sum2(1,2,5);
let result3 = sum2(1,2);
console.log(result2)
console.log(result3)

console.log("arrow usage");
const func1 = (x)=>{
    console.log("number: "+x);
}
// you can store function in a variable
//you can interpass 1 function into other
func1(34)
func1(99)
func1(34342890)