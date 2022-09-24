//Chapter 3 FUNCTIONS

// Defining a function
//function is regualr binding where a valuce of the binding is a function
const square = function (x) {
    return x * x
}; console.log(square(12))
//=> 144
//functions are created with the keyword function
//functions have parameters(in the case above it is only 'x')
//functions must not have parameters but can also have many
function makeNoise() {
    console.log("Pling")
}; makeNoise() //=> "Pling"

//explanation - when the for loop runs up to 10, it is logging the result everytime. 2 * 1 = 2, then 2*2 =4, etc until 1024
const power = function (base, exponent) {
    let result = 1
    for (count = 0; count < exponent; count++) {
        result *= base //result = result * base
    }
    return result
}; console.log(power(2, 10))

// a return statement determines the value of the function returns
// parameters to a function behave like regualr bindings but their initial values are given by the caller of the function

//Binding and Scopes
//each binding has a scope - bindings defined outside a block or function are GLOBAL 
// therefore bindings declared within a block or function are LOCAL
// bindings declared with let and const are local to that block in which they are declared

let x = 10
if (true) {
    let y = 20
    var z = 30
    console.log(x + y + z)
    // => 60
}
//y cannot be seen outside the block as it has been defined with LET
console.log(x + z)

// each scope can "look out" to the scopre around it, this is why x is visible inside the block example
// except for when multiple bindings have the same name, code can only see the innermost one

const halve = function (n) {
    return n / 2
}
let n = 10
console.log(halve(100));
// =>50
console.log(n)
//=>10
// when the code inside the halve function refers to n, it is seeing its own n, not the global n


//Nested Scope
//blocks and functions can be created within other blocks and functions, producing multiple degrees of locality
const hummus = function (factor) {
    const ingreident = function (amount, unit, name) {
        let ingreidentAmount = amount * factor;
        if (amount > 1) {
            unit += "s"
        }
        console.log(`${ingreidentAmount}, ${unit}, ${name}`)
    }
    ingreident(1, "can", "chickpeas")
    ingreident(1, "can", "chickpeas")
    ingreident(1, "can", "chickpeas")
    ingreident(1, "can", "chickpeas")
}
// this is lexical scoping "functions are executed using the scope chain that was in effect when they were defined"

// Functions as values
//a function value can do all the things other values can do.
//pass as an arguement, store in a new binding, etc
let missileLaunch = function () {
    missileFire.launch("now")
};
if (safeMode) {
    missileLaunch = function () {/*does nothing*/ }
};
// in the example above missileLaunch is being stored as a new binding in sage mode or in fire mode

//Declaration Notation 
// shorter way to create a function binding
// function keyword is at the start of a statement
function sqaure(x) {
    return x * x
};
// function declaration is not part of regular top-to-bottom flow of control 
console.log('beer is really good:', beer())

function beer() {
    return "PAUSE... NOT"
}
// the function will still be called above on line 92 even though the function is declared below it.

// Arrow Functions
// a third notation for functions. Instead of the function keyword it uses an arrow => 
const power = (base, exponent) => {
    let result = 1;
    for (let count = 1; count < exponent; count++) {
        result *= base
    }
    return result;
}
// the arrow comes after the list of parameters followed by the function's body
// when there is only one parameter you can eliminate the parenthesis 
const sqaure1 = (x) => { return x * x };
const sqaure2 = x => x * x;
//when there are no parameters at all the arrow function just has empty parenthesis 
const horn = () => {
    console.log("MEEP")
}

// the call stack 
function greet(who) {
    console.log("hello" + who)
}
greet("Lauren")
console.log("goodbye")

// the call stack would look like this 
/*
- not in funciton
-- in greet
---- in console.log
-- in greet
- not in function
---- in console.log
- not in function
*/
/* the call to greet causes control to jump to the start of that function (line 119) the function calls console.log
which takes control, does its job, and then returns control to line 2. there it reaches the end of the greet function, so it returns to
the place that called it which is line 121. the line after that calls console.log again
after that returns the program reaches its end*/

// the palce where the computer stores this context is called the "call stack"

// the code below asks the computer a hard question that would cause an inifinte back and forth (if the computer had endless space)
function chicken() {
    return egg
}
function egg() {
    return chicken
}

console.log(chicken() + ' came first');

// optional arguements 
function sqaure(x) { return x * x }
sqaure(4, "hedgehog", true)
// this will return 16, why? 
// javascript will ignore the string and the boolean and only run the number
// the upside to this behavior can be used to allow a function to be called with different numbers of arguements 
function minus(a, b) {
    if (b === undefined) return -a
    else (a - b)
}
console.log(minus(10))
// => -10
console.log(minus(10, 5))
// => 5


// if you write an = operator after a parameter, followed by an expression the value of that expression will replace the argument when it is not given

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 1; count < exponent; count++) {
        result *= base
    }
    return result
}
// if no second parameter is entered the function will default to 2
console.log(power(3))
// 3 to the 2nd power = 9
console.log(power(2, 4))
// 2 to the 4th power 16



