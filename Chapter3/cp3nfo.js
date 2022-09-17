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
//nested scope