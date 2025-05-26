const fs = require('fs');

//You can import promises in commonJS also, not only in the new one. 
// const fs = require("fs/promises")

// console.log(fs)

//to create a new file
console.log("starting")
// fs.writeFileSync('jvjv.txt', 'jv is greaat!')
fs.writeFile("jvjv2.txt", "jv again good",() => {
    console.log("file creation done")

    fs.readFile("jvjv2.txt",(error, data) => {
        
        console.log(error,data.toString());
    })
})

//example for append
fs.appendFile("jvjv.txt", "i am great agian", (e,d)=> {
    console.log(d)
})
console.log("ending")

