// Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds. -->


async function additem(item) {
    return new Promise((resolve, reject) => {

        setTimeout(() => { 
            console.log(item*2);
            resolve(item*2);
        }, 500);

    })
}

async function main() {
    let input = prompt("enter the array")
    let arr = input.split(" ").map(Number);
    
    //just to save the items in new array
    let arr2 = []
    let i=0;
    for (const item of arr) {
        arr2[i] = await additem(item)
        i++;
    }
    console.log(arr2);

    
}
main()
