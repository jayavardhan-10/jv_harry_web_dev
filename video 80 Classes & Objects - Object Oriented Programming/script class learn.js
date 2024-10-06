class Animal
{
    constructor(name)
    {
        this.name = name;
        console.log('new object created...');
        
    }

    eats()
    {
        console.log('yes he eats');
    }
    runs()
    {
        console.log('yes he sleeps');
    }
    
}



let newrabbit = new Animal("chimtu pro max")

newrabbit.runs();
newrabbit.eats();

//--------------------------------------------------------------------------------------------------

//INHERITANCE CONCEPT
//INHERITANCE CONCEPT
//INHERITANCE CONCEPT
//INHERITANCE CONCEPT
//INHERITANCE CONCEPT
class Lion extends Animal
{
    constructor(name)
    {
        //here you cant call constructor till you use SUPER parent constructor
        super(name)
        console.log('new LION object created');
    }
    //IF YOU DONT USE SUPER THE ERROR WILL BE
    //Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // at new Lion (script class learn.js:41:17)
    // at script class learn.js:53:17

    roars()
    {
        console.log('yes roars very loud');
    }
    hunts()
    {
        console.log('hunts very fast');
    }
}

let childlion = new Lion("sher hu mai");
childlion.eats()
childlion.roars()
childlion.hunts()
childlion.runs()
// OUT PUT IS
// new object created...
// new LION object created
// yes he eats
// yes roars very loud
// hunts very fast
// yes he sleeps


//---------------------------------------------------------------------------





















