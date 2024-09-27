console.log("hello i am loop statement"); 
//remember in js semicolon is optional
// let age = 20;
// if(age>18)
// {
//     console.log("eligible");

// }
// else
// {
//     console.log("not eligible");
// }
let obj = {
    name: "jv",
    age : 20,
    prof: "gamer"
}
for (const key in obj) {
    
    console.log(key +":" + key.valueOf)
 
}

//for of loop
// traversing string
for (const c of "harry"){
    console.log(c);
}
