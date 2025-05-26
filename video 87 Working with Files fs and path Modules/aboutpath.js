import path from "path"

//This will print all the functions present in path module. 
// console.log(path)


let myPath = "C:\\Users\\jayav\\Desktop\\Sigma Web Dev Course\\video 87 Working with Files fs and path Modules\\jvjv.txt"

//to know the extension of the file
console.log(path.extname(myPath))


//to know the directory name
console.log(path.dirname(myPath))

//To know the file name. 
console.log(path.basename(myPath))


console.log(path.join("c:/", "programs\\harry.txt"))