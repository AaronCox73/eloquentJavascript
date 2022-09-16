// a fragment of code that produces a values is an EXPRESSION

//BINDINGS
// to catch and hold values JS provides BINDING or VARIABLE
let caught = 5 * 5; // caught is a binding that holds 5 * 5
//once a bindings has been defined its name can be used as an expression
let ten = 10;
console.log(ten * ten);
// => 100
// when a binding is pointed at a value it is not indefinite 
let mood = light
console.log(mood)
//=> light
mood = 'dark'
console.log(mood)
//=> dark
// another example
let jeffDebt = 100
jeffDebt - 30
console.log(jeffDebt)
// => 70

// a single let statement can define multiple bindings but must be seperated with a comma
let one = 1, two = 2
console.log(one + two)
// => 3

// const is for constant and it means the binding CANNOT be changed

//BINDING NAMES 
// can be any word and digits can be apart but cannot start with a digit and may also use an _ or $
// keywords (such as let, const, etc) may NOT be used, and other reserved words:
// break case catch class const continue debugger default
// delete do else enum export extends false finally for 
// function if implements import interface in instanceof let
// new package private protected public return static super
// switch thus throw true try typeof var void while with yield

// FUNCTIONS 
// values provided in the default enviroment have the type function

prompt('ENTER PASSWORD'); // executing a function is called invoking, calling, or applying
// you can call a function by putting parenthesis after a expression that produces a function value

//console.log FUNCTION
// an expression that retrieves the log property

// Return Values
// when a function produces a value it RETURNS that value
// anything that produces a value in javascript is an expression

// CONTROL FLOW
// executed from top to bottom
let theNumber = Number(prompt('PICK A NUMBER'));
console.log('you number is the sqaure root of' + theNumber * theNumber);
// number converts the value to a number as prompt is always returned as a string 

//CONDITIONAL EXECUTION 
//created with the if keyword
// we want something to be executed if and only if a condition holds to be true
let theNumber = Number(prompt("PICK A NUMBER"))
if (!Number.isNaN(theNumber)) { //unless the number is not-a-number, do this =>
    console.log('Your number is the square root of ' + theNumber * theNumber);
}
// the braces ({}) can be used to put multiple statements into a group, called a BLOCK

// this code won't only execute if it is true but will handle it if it is not true
let theNumber = Number(prompt("PICK A NUMBER"))
if (!Number.isNaN(theNumber)) { //unless the number is not-a-number, do this =>
    console.log('Your number is the square root of ' + theNumber * theNumber);
} else {
    console.log("Hey why did you not pick a number?")
}

// you can also chain mulitple together with if else pairs
let num = Number(prompt('PICK A NUMBER'))

if (num < 10) {
    console.log("small")
} else if (num < 100) {
    console.log('medium')
} else {
    console.log('large')
}

//WHILE AND DO LOOPS 
// a while loop uses the keyword while and runs as long as the it is true when converted to a boolean 

let x = 0;
while (x <= 10) {
    console.log(x);
    x = x + 2;
}

// while loop to calculate 2 to the 10th power
let a = 1
let b = 0
while (b < 10) {
    a = a * 2
    b = b + 1
} console.log(a)

// do loop is similar to a while loop but it runs at least once, no matter what
let yourName
do {
    prompt("What is your name?")
} while (!yourName)
console.log(yourName)
// this program will force you to enter a name

//FOR LOOPS
for (let i = 0; i < 10; i++) { //must contain two semicolons
    console.log(i)
} // in most czses a for loop is shorter and clearer than a while loop

// Breaking out of a loop 
//waiting for a loop to go "false" is not the only way to exit a loop, you can also use the work "break"
for (let current = 0; ; current++) {
    if (current % 7 == 0) {
        console.log(current)
        break
    }
}
// since there is no part to check if the loop will end, this loop would run indefinitely without 'BREAK'
// "break" does the opposite of the word "continue" which would force the loop to continue running

//Updating bindings succinctly
counter = counter + 1
//JS shortcut
counter += 1;
// similar shortcuts 
// *= 
// -= 
// ++ for +=
// -- for -=

// Dispatching on a value with switch
switch (prompt('What dirt bike should I ride today?')) {
    case "going to the track":
        console.log("450sx")
        break;
    case "going to ride hard enduro":
        console.log("300xcw")
        break;
    case "Need to work on technical skill":
        console.log("125txt")
        break;
    default:
        console.log("youre too broke to ride");
        break
}

//COMMENTS 

// - single line 
/* MULTIPLE
LINES */
