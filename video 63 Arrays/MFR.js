//map filter reduce
//map filter reduce
//map filter reduce
//map filter reduce
//map filter reduce

//map, filter more used
//reduce is less used   


//consider the code
let arr = [10,4,3,32,15]
let newarr = []
// let newarr2 = []
console.log("using for")
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2) //sq of element into new array
}

console.log(newarr) //op: [ 100, 16, 9, 1024, 225 ]
//happens in 1 line
console.log("using map")
let newarr2 = arr.map((e) => {
    return e**2
})
console.log(newarr2)
//using map
// [ 100, 16, 9, 1024, 225 ]



//FILTER
//FILTER
//FILTER
//FILTER
//FILTER
//FILTER
const greaterThanTen = ((e)=>
{
    if(e>10)
    {
        return true
    }
    return false
})
//here frst the filter checks the greaterthan10 thing
//then according to taht filters the arr
console.log(arr.filter(greaterThanTen))
//op : [ 32, 15 ]
console.log(arr)//[ 10, 4, 3, 32, 15 ] // it doesnt effect the array at all



//REDUCE
//REDUCE
//REDUCE
//REDUCE
//this is less used
//does the operation first on 1st thigns 
// then continues to others 1 by 1

let areduce = [1,2,3,45,6]
const reduce1 = (a,b) =>
{
    return a+b
}

console.log(areduce.reduce(reduce1))
//op 57
//process a=1 b=2
//1+2 = 3
//3+3 = 6
// 6+45 = 51
//51 + 6= 57
//THINGS DONE 1 BY 1



//ARRAYFROM
//ARRAYFROM
//ARRAYFROM
//ARRAYFROM
//ARRAYFROM
//ARRAYFROM
//to create any object into array use this
console.log(Array.from("hellojv"))
// [ 'h', 'e', 'l', 'l', 'o', 'j', 'v']