console.log("harry bhai")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

//you can select 1 hting and change its css
boxes[2].style.backgroundColor = "aqua"

//but if you insert a box in middle
//here 3rd box will get red
//but we want to make the 3rd number box red
//how to do?????

//use getelementbyid and change css
document.getElementById("aquabox").style.backgroundColor="aqua"

//in this .box means the first box 
//this returns a first .box element
document.querySelector(".box").style.backgroundColor="green"

//if you want to change it for all
//htis returns html collection of box elements
//we cant style it at once
//use for each loop and style individually
//iterate the node list and sytle it

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="green";
})


//by tag name
document.getElementsByTagName("div")

//by name
document.getElementsByName("hello")

//