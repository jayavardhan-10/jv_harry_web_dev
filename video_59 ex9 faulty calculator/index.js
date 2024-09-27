/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

only 10% of times

*/

console.log("give the operation")
// Input Numbers
let a = 12
let b = 2
// Random Number
random = Math.random()

let addition = a+b ;
let Subtraction = a-b;
let Multiplication =a*b;
let Division= a/b;
let Exponentiation = a**b;

if(random>0.1)
{
    console.log("add:"+addition)
    console.log("sub:"+Subtraction)
    console.log("mul:"+Multiplication)
    console.log("div:"+Division)
    console.log("exp:"+Exponentiation)
    
}
else
{
    addition = a-b;
    Multiplication = a+b;
    Subtraction = a/b;
    Division = Exponentiation;
    console.log("add:"+addition)
    console.log("sub:"+Subtraction)
    console.log("mul:"+Multiplication)
    console.log("div:"+Division)
    console.log("exp:"+Exponentiation)
}

