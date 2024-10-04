

const callback = (arg) =>{
    console.log(arg)
}



//CALL BACK
// you can pass a function as a variable

const loadScript = (src, callback ) => {    
    //craete a variable and initialize a script element
    let sc = document.createElement("script")
    //give src to it
    sc.src = src;
    
    //when it loads, call the callback function
    sc.onload = callback("jv");
    
    //append that sc to the head
    document.head.append(sc)
  
}

//call a loadScript()

// - !!dont know why he seached prism js cdn
// - then copied some random prismjs link
// - and gave into the input for loadscript src

// ok he is telling that it is a template used so that he can highlight the code in website
// he uses it in codewith harry.com also

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
