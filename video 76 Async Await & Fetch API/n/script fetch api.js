async function getData() {

    //getting data from server

    //google: json palceholder
    //https://jsonplaceholder.typicode.com/
    //from this website copy this

    // JSONPlaceholder - Free Fake REST API

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    //here x gets s promise and this rhs returns a promise
    // dont let other thigns to happen so 
    //await the fetch thing
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')  //returning data promise

    let data = await x.json()  //returning the _____DATA parsing PROMISE ______
    //here x is being parsed into json RYT
    // there for it takes some time 
    // thats why we are doing _____ await x.json()
    //here you can do parsing in ____ x.text() ____ too...


    //to check x has a returned promise
    // console.log(x);

    //to print data
    return data


    // return 455 // random number // as something shall be returned for sure

    
}
//to use await you need a async main// inside that we will use await
async function main() {
    console.log('process 1');
    console.log('process 2');

    console.log('load data');
    
    let data1 = await getData()
    //till this completes, it doesnt move forward

    console.log(data1);
    console.log('process data');
}
//you need to call main to work
main()