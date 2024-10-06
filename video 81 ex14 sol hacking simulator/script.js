// Create a hacking simulator which has green background and it shows
// these messages with random delay of 1 to 7 seconds

// Initializing Hacking...
// Reading your Files... 
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...
// The three dots must blink so that it looks like a real terminal

async function getdata1()
{
    //simulate getting from server
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Initializing Hacking...")
        }, 1000);
    })
}
async function getdata2()
{
    //simulate getting from server
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Reading your Files... ")
        }, 1000);
    })
}
async function getdata3()
{
    //simulate getting from server
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Password files Detected... ")
        }, 1000);
    })
}
async function getdata4()
{
    //simulate getting from server
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Sending all passwords and personal files to server...")
        }, 1000);
    })
}
async function getdata5()
{
    //simulate getting from server
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Cleaning up...")
        }, 1000);
    })
}

async function main() {

    document.body.style.backgroundColor = "darkgreen"

    let container = document.querySelector(".container")
    let data1 = await getdata1()
    container.innerHTML += data1 + "<br>";
    
    let data2 = await getdata2()
    container.innerHTML += data2 + "<br>";
    
    
    let data3 = await getdata3()
    container.innerHTML += data3 + "<br>";
    // console.log(data3)
    
    let data4 = await getdata4()
    container.innerHTML += data4 + "<br>";
    // console.log(data4)
    
    let data5 = await getdata5()
    container.innerHTML += data5 + "<br>";
    // console.log(data5)
    
    container.innerHTML += "the end!" + "<br>";
    
    
}

main()