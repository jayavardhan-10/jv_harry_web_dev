let arr = [34, 45,322, 0, 324, 67]
//---------------------------------------------------------------------
// FOR EACH LOOP USAGE

arr.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})
// OUTPUT
// 34 0 [ 34, 45, 322, 0, 324, 67 ]
// 45 1 [ 34, 45, 322, 0, 324, 67 ]
// 322 2 [ 34, 45, 322, 0, 324, 67 ]
// 0 3 [ 34, 45, 322, 0, 324, 67 ]
// 324 4 [ 34, 45, 322, 0, 324, 67 ]
// 67 5 [ 34, 45, 322, 0, 324, 67 ]

//------------------------------------------------------------------
//FOR IN LOOP
//FOR IN LOOP
//FOR IN LOOP
//FOR IN LOOP
// used in the context of objects
//WORKS BOTH FOR ARRAYS AND OBJECTS
let obj = 
{
    a: 1,
    b : 2,
    c: 3
}

for (const key in obj) {
    const element = obj[key];
    console.log( key, element)
}
//OUTPUT
// a 1
// b 2
// c 3
for (const key in arr) {
    const element = arr[key];
    console.log(element)
}
//
// 34
// 45
// 322
// 0
// 324
// 67

//------------------------------------------------------------

//FOR OF LOOP
//FOR OF LOOP
//FOR OF LOOP
//FOR OF LOOP
//FOR OF LOOP
//FOR OF LOOP

for (const value of arr) {
    console.log(value)
}
//OUTPUT
// 34
// 45
// 322
// 0
// 324
// 67

////FOR OF DOESNT WORK FOR OBJECTS
// for (const value of obj) {
//     console.log(obj[value])
// }
//TypeError: obj is not iterable

