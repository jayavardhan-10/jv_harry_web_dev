

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

// ### PROMISE.RACE
// this is used we dont knjow whic hcomes first 
// - whichever comes first will be the winenr and the output too

let p3 = Promise.race([prom1,prom2])

p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);  
})
