// Create a hacking simulator which has green background and it shows
// these messages with random delay of 1 to 7 seconds

// Initializing Hacking...
// Reading your Files... 
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...
// The three dots must blink so that it looks like a real terminal

//crating a js array of these things

//for the randomdelay arrow function


// async arrow function
const additem = async (item)=>{
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomdelay = ()=> {
    return new Promise((resolve, reject)=>{
        
        //to create a random number btw 1 to 7
        // formula:::: start + (end-1)*Math.random()
        timeout = 1+6*Math.random()
        setTimeout(() => {
            resolve()
        }, timeout*1000);

    })
}
async function main()
{

    // to blink the dots
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("..."))
        {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3);
            //last's html's last 3 things will be removed and as the dots are over , new will be added by else
        }
        else
        {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 200);

    let text = [
        "Initializing Hacking...",
        "Reading your Files...",
        "Password files Detected...",
        "Sending all passwords and personal files to server...",
        "Cleaning up..."]
        
        //for of loop of array
        for (const item of text) {
            //calling a async function
            await additem(item);
        }

        //to stop the last dot beating at 1 time
        await randomdelay()
        clearInterval(t)
}
main()
