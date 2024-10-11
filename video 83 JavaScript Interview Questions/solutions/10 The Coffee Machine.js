// 10. The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


async function brewCoffee(coffeeType) {
    return new Promise((resolve, reject) => {
        let time = 2 + (Math.random() * (5 - 2));
        setTimeout(() => {
            
            resolve("your coffee " + coffeeType + " is ready! in: "+(Math.floor(time)   )+"sec")
        }, time*1000);
    })
}



async function main() {
    let input = prompt("enter the customer orders")
    let arr = input.split(" ");
    for (const item of arr) {
        let result = await brewCoffee(item);
        console.log(result);
        console.log("enjoy your coffee")
    }
}
main()