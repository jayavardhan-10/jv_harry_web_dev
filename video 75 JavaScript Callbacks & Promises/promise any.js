

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




