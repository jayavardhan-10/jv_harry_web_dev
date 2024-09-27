let name1 = "harry"
console.log("name1 is:"+name1);
console.log("name1 length is:"+ name1.length);
//particular char printing using index
console.log(name1[3]);
console.log(name1[2]);
console.log(name1[0]);

let name2 = "soun";
//generally we write like this for long thing
console.log("my name is "+name1+" my frnd name is "+name2);
//instead you can use like this for simplicity
// using ````` this thing
//THIS IS TEMPLATE LITERALS
console.log(`my name is ${name1} and my frnd name is ${name2}`);

//TO UPPER TO LOWER
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
console.log(name2.length);

//SLICING OF STRINGS
let str = "welcome"
console.log("SLICING OF STRINGS")
//prints 1 to 3....
console.log(str.slice(1,4))

//prints 1 to last
console.log(str.slice(1))

console.log("REPLACING")
console.log(str.replace("wel","thala"))
//first occurence is only cared
//eg.
let str2 = "welwel"
console.log(str2.replace("wel","thala"))

console.log("CONCAT")
console.log(str.concat(str2))
console.log(str.concat(" hello this is jv"))
console.log(str.concat(" hello this is jv", "from mogalthur"))
// we can even use + no prblem

console.log("TRIM")
// remove first and last waste spaces
let str3 = " welcome my name is jv "
console.log(str3.trim())

/*

NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE
STRINGS ARE IMMUTABLE
YOU CANT CHANGE THEM
NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE
*/

// indexOf
// charAt
//endsWith
//startsWith