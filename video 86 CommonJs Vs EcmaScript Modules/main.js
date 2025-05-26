// import {a,b,d} from "./mymodule.js"
// console.log(a, b, d);

// import obj from "./mymodule.js";
// console.log(obj);

//no issue you can use any name for the import
//because from the module you are exporting default 
//only that is being exported over there 
// that will only come 
// import jvjv from "./mymodule.js";
// console.log(jvjv);


// 2 2 2 2 
//for REQUIRE SYNTAX NOW 
const a = require("./mymodule2.js")

console.log(a,__dirname, __filename);