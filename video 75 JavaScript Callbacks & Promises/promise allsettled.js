
// PROMISE:  PROMISE OF CODE EXECUTION
//mostly you dont need to create your own promises
// if a task is done , you send a resolve (or) reject value, saying that the task is done
// once it is resolved, you can do promise1.then(another function)
// 
// 
// 
// 
// 
// alert("Script is running");
// console.log("what is happeing here")
// console.log('this is promises');

//inside a promise there is a fucniton going on
//whichc takes input resolve,reject
//then it may return something
let prom1 = new Promise((resolve, reject)=>{

    let a = Math.random()
    if(a<0.5)
    {
        reject("number rejected too low 1")
    }

    else
    {

        setTimeout(() => {
            console.log("yes i am done 1")
            resolve("jv12345 1")
            
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject)=>{

    let a = Math.random()
    if(a<0.5)
    {
        reject("number rejected too low 2")
    }

    else
    {

        setTimeout(() => {
            console.log("yes i am done 2")
            resolve("jv12345 2")
            
        }, 1000);
    }
})  

//PROMISE ALL WORKS WHEN JUST ALL WORK THATS ALL
// WORK MEANS REJECT OR RESOLVE anything

let p3 = Promise.allSettled([prom1,prom2])

p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);  
})
