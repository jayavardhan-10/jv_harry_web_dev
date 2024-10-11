// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


async function placeOrder(ordername) {
    
    return new Promise((resolve, reject)=>{
        let time = Math.random();
        setTimeout(() => {
            resolve("placed order "+ordername +" timetaken "+ ((3000*time)/1000)+" sec")
        }, 3000*time);
    })
}

async function main() {

    let input1 = prompt("enter the array of products")
    let arr1 = input1.split(" ")
    
    for (const item of arr1) {
        let result = await placeOrder(item);
        // console.log(result);
        document.body.innerHTML+=`<div> ${result} </div>`
    }
}

main()