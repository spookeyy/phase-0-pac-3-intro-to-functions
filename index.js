// Follow along with the examples here
//ARGUMENTS
function doSomething(thing){
    console.log(thing)
}
doSomething("anything") //passing the argument 'anything' into our function

//Let's see about parameters
function sayHello(firstname) {  //parameter - firstname
    console.log(`Hello, ${firstname}!`) //interpolation
}

//passing arguments in function call and arguments stored in parameter
sayHello("Jane");
sayHello("Marcus");

function say(greeting, firstname) {
    console.log(`${greeting}, ${firstname}!`) //interpolation
}

say("Goodbye", "Romeo")

//order of arguments
function variables(greeting, firstname){
    console.log("firstname: ", firstname);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstname}!`);
}

variables("What's good!!!", "Juliana")

//Return values
function add(x, y){
    let num = 3 + 5;
    console.log(num)
    // return num;
}

add();

function multiply(x, y){
    return x * y;
}

console.log(multiply(3, 5));


function say2(greeting, firstname){
    return `${greeting}, ${firstname}!`;
}

console.log(say2("Hello", "Lizzy"));
