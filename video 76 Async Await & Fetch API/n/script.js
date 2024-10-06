// function getData()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("the resolve value")
//         }, 3500);
//     })
// }

// //APPROACH 1
// //below things will happen thats all
// console.log('process 1');
// console.log('process 2');

// console.log('load data');
// let data1 = getData()

// console.log(data1);
// console.log('process data');




// //APPROACH 2
// //below things will happen thats all
// console.log('initial process 1');
// console.log('initial process 2');
// //till here things will happen ofc

// console.log('load data');
// let data1 = getData()
// // only after this the below things shall happen

// data1.then((v)=>{

//     console.log(data1);
//     console.log('process data');
//     console.log('process data 2');
//     console.log('ANOTHER TASK');
// })

//APPROACH 3 USING ASYNC AWAIT
async function getData() {

    //simulate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("the resolve value")
        }, 3500);
    })
}
//to use await you need a async main// inside that we will use await
async function main() {
    console.log('process 1');
    console.log('process 2');

    console.log('load data');
    
    let data1 = await getData()
    //till this completes, it doesnt move forward

    console.log(data1);
    console.log('process data');
}
//you need to call main to work
main()
