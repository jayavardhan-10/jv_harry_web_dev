async function sleep()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// let a = await sleep()
// let b = await sleep()
//this wont work at all
//bcoz you need to create an async funciton
// but all the time you jsut dont want to create async function
// so we use iife: create function and immediately invoke it

// :implementation below
//this is a immediately invoke fnxn
//IIFE : IMMEDIATELY INVOKE FNXN EXPRESSION

function sum(a,b,c)
{
    return (a+b+c);
}
(async function main(){
    
    var a1
    console.log(a1)
    //till here the a1 isnt declared ryt
    a1 = 6
    //in a block only


    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let x,y = [10,20]
    // console.log(x,y);
    // // (2) [10, 20]
    // // 0: 10
    // // 1: 20
    // // length: 2[[Prototype]]: Array(0)


    // let [x1,y1] = [10,20]
    // console.log(x1,y1);
    // // 10 20
    
    // let [x1,y1] = [10,20,70]
    // console.log(x1,y1);
    // // 10 20 
    // //here 70 is assigned to none

    // let [x1,y1, ...rest] = [10,20,70,90, 34089, 32 , 2389, 232]//all others into rest
    // console.log(x1,y1,rest);
    // 10 20 (6) [70, 90, 34089, 32, 2389, 232]
    // 0: 701: 902: 340893: 324: 23895: 232length: 6[[Prototype]]: Array(0)

    //yuou some times need only few elements from an object then use this..

    // let obj1 ={
    //     a2:13,
    //     b2:14,
    //     c2: 19,
    // }

    // let {a2,b2} = obj1; //pulls only a2 b2 from the object
    // console.log(a2,b2)
    // //13 14

    // let arr = [1,2,3,45];
    // console.log(sum(arr[0],arr[1],arr[2]))
    // console.log(sum(...arr))

    


})()

//ouput error wont come
// 45
// 45