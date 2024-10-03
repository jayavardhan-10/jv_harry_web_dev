console.log("coloring the boxes")
let boxes = document.getElementsByClassName("box")
//or you can use like this
// let boxes = document.querySelector(".container").children

// console.log(boxes)

//html collection doesnt have for each method
//therefor convert into array

function getRandomColor()
{
    //here the value will be like rgb(255, 255, 255)
    //limit is 0-255

    //get 3 random colors
    //here random will be from 0 to 1
    //to get 0 to 255 do
    //0+Math.random()*255 //range : 0-255

    // let c1 = 0 + Math.random()*255
    // let c2 = 0 + Math.random()*255
    // let c3 = 0 + Math.random()*255
    //use ceil function for getting integer values
    let c1 = Math.ceil(0 + Math.random()*255)
    let c2 = Math.ceil(0 + Math.random()*255)
    let c3 = Math.ceil(0 + Math.random()*255)

    //use literal to return values
    return `rgb(${c1},${c2},${c3})`
    //use ` ` only "" or '' doesnt work in return
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})