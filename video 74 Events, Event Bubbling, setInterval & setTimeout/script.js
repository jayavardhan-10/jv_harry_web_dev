let button = document.getElementById("btn")

//variable.addEventListener("action" , function)
//in function jsut braces means no name function

// button.addEventListener("click", ()=>{
//     alert("you clicked the button")
// })

//accesss things from this "browser events mdn"
//https://developer.mozilla.org/en-US/docs/Web/Events

//list of all mouse events
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> i was changed </b> <br> hurray its done"
})

//this context menu is for RIGHT CLICK
document.addEventListener("contextmenu", ()=>{
    alert("please dont hack us using right click");
})


document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
    //this gives what key you pressed then gives its key
//     ArrowDown 40
// script.js:27 a 65
// script.js:27 d 68
// script.js:27   32
// 2script.js:27 Shift 16
// script.js:27 a 65
// script.js:27 d 68
// script.js:27 s 83
// script.js:27 f 70
// script.js:27 a 65
// script.js:27 CapsLock 20
// script.js:27 Enter 13
// script.js:27 J 74
// script.js:27 A 65
// script.js:27 D 68
// script.js:27 S 83
// script.js:27 K 75
// script.js:27 Tab 9
// script.js:27 K 75
// script.js:27 L 76
// script.js:27 J 74
// script.js:27 ; 186
// script.js:27 A 65
// script.js:27 L 76
// script.js:27 K 75
// script.js:27 D 68
// script.js:27 F 70
})


