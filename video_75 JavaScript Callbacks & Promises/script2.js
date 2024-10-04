

const callback = (arg) =>{
    console.log(arg)
}



//CALL BACK
// you can pass a function as a variable

const loadScript = (src, callback ) => {    
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("jv");
    document.head.append(sc)
}

//call a loadScript()

// - !!dont know why he seached prism js cdn
// - then copied some random prismjs link
// - and gave into the input for loadscript src
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
