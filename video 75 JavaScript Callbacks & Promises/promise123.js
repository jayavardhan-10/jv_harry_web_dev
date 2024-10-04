
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
console.log("what is happeing here")
console.log('this is promises');

//inside a promise there is a fucniton going on
//whichc takes input resolve,reject
//then it may return something
let prom1 = new Promise((resolve, reject)=>{

    let a = Math.random()
    if(a<0.5)
    {
        reject("number rejected too low")
    }

    else
    {

        setTimeout(() => {
            console.log("yes i am done")
            resolve("jv12345")
            
        }, 3000);
    }
})  

//meaning, once the prom 1 is done 
//print the value on which it is resolved


//now lets catch the error and run a fucntion in the catch
prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

