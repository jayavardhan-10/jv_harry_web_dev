let a = prompt("enter a")
let b = prompt("enter b")

if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("not allowed ");
    
}
// let sum = a+b // this will concatenate
let sum = parseInt(a)+parseInt(b) // this will concatenate

console.log("the sum is ", sum);

//but what if you give stirings here?????
//then it just gives NaN

// but you want an error
// then use this error throwing 


//if not use try and catch


try {
    console.log(a+c);
    
} catch (error) {
    console.log('error aa gaya bhai');
    
}