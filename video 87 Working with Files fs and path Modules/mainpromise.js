import fs from "fs/promises"

//As we are directly in a module, we do not need
// Async function to use await function.

let a = await fs.readFile("jvjv.txt")


// let b = await fs.writeFile("jvjv.txt", "\n\n\n\n extra text added here")

//you can append over here not issue then
let b = await fs.appendFile("jvjv.txt", "\n\n\n\n extra text added here")
console.log(a.toString());