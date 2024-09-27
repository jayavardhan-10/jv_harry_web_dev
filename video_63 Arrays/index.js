let a = [1,2,3,4,5]
console.log(a) //[ 1, 2, 3, 4, 5 ]
console.log(a.toString()) // to convert array into string
//op 1,2,3,4,5

console.log(a.join(" and "))//the elements separated by and
// 1 and 2 and 3 and 4 and 5
console.log(a.join(" "))//1 2 3 4 5

console.log(a.pop())//removes last element// alters the original array
console.log(a)//altered array //[ 1, 2, 3, 4 ]

a.push(39)//pushes element into array // alters the original array
console.log(a)//op : [ 1, 2, 3, 4, 39 ]

a.push("jv")//you can push another data type also
console.log(a)//op :[ 1, 2, 3, 4, 39, 'jv' ]

//push returns the size 
console.log(a.push("jv2"))//op: 7

a.shift()//removes first element // OPPOSITE TO POP
console.log(a)//op : [ 2, 3, 4, 39, 'jv', 'jv2' ]

a.unshift("jv99")//adds element at first //OPPOSITE TO PUSH
console.log(a)//op :[

//delete
//delete
//delete
//delete
//delete
//delete removes the element
// doesnt change the size
console.log(a.length)//7
delete a[3]// 
console.log(a) // [ 'jv99', 2, 3, <1 empty item>, 39, 'jv', 'jv2' ]
//memory there value not there
console.log(a.length)//7


// a.concat(a2,a3)
// a.concat(a2,a3)
// a.concat(a2,a3)
// a.concat(a2,a3)
// a.concat(a2,a3)
// a.concat(a2,a3)
// a.concat(a2,a3)
a1 =  [1,2,3]
a2 = [3,4,5]
a3 = [7,8,9]
console.log(a1.concat(a2)) //[ 1, 2, 3, 3, 4, 5 ]
console.log(a1)//[ 1, 2, 3 ]// a1 doesnt change
console.log(a1.concat(a2,a3)) //[ 1, 2, 3, 3, 4,5, 7, 8, 9]
console.log(a1)//[ 1, 2, 3 ]// a1 doesnt change

// a1.sort()
// a1.sort()
// a1.sort()
// a1.sort()
// a1.sort()
// a1.sort()
a4 = [3,1,2]
console.log(a4)// [ 3, 1, 2 ]
console.log(a4.sort())// a4 changes permanently //[ 1, 2, 3 
console.log(a4)// [ 1, 2 ,3]



//splice

//slice
//slice
//slice
//slice
// slice out a piece of an array and CREATE A NEW ARRAY
console.log("slice")
let a5= [0,1,2,3,4]
console.log(a5.slice(2)) // means index 2 to end [ 2, 3, 4 ]
console.log(a5.slice(2,4)) // [ 2, 3 ]
console.log(a5.slice(2,5)) // [ 2, 3, 4 ]
console.log(a5.slice(1,4)) // [ 1, 2, 3 ]
console.log(a5.slice(-1,4)) //  []
console.log(a5.slice(2,6)) // [ 2, 3, 4 ]


// reverse
// reverse
// reverse
// reverse
// reverse
//reverse the array in the source array only
console.log("reverse")
console.log(a5.reverse()) //[ 4, 3, 2, 1, 0 ]
console.log(a5) // [ 4, 3, 2, 1, 0 ]// source array changed












