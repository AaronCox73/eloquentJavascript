// Bits are any kind of two-valued things, usually described as 0s & 1s

// Values - pieces of bits that make up a larger chunk of information
// Value Types

// Numbers/Integers
13 // whole number
9.81 // fractional number
2.99e8 // exponent numbers (tend not to be AS precise as WHOLE numbers)

//Special Numbers
// Infinity
// -Infinity
// NaN aka Not a Number

//Strings
//Strings represent text and are in quotation marks
'Eloquent Javascript Chapter 1'
"Here goes NOTHING!"
    `Back tickles`
// double, single quotes, or backticks
'He said "verpiss dich" and it made me cry'
"He said 'verpiss dich' and it made me cry"
//Strings can be concatenated or ADDED together
'concat' + 'enated'
    //backticked strings tend to be template literals and add ${} 
    `half of 100 is ${100 / 2}` // the result will be computed into a string



//Boolean 
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// == equal to
// != not equal to

// distinguishes between only two possibilites 
// yes and no OR true and false OR off and on
console.log(3 > 2)
// => true
console.log(3 < 2)
// => false

//Empty Values
// the absense of meaningful value
// null
// undefined





//Arthemetic
// + Addition 2 + 2 =4
// - Subtraction 3 - 1 = 2
// / Division 9 / 3 = 3
// * Mulitplication 3 * 3 = 9
// % Modulo aka Remainder operator 13 % 4 = 1
100 + 4 * 11 // Multiplication occurs first
    (100 + 4) * 11 // addition occurs first
1 - 2 + 1 // When operators with same precedence appear next to each other
// they are applied from left to right 

// Unary Operators
//not all operators are symbols some are written as words such as typeof
console.log(typeof 4.5)
// => number
console.log(typeof 'x')
// => string

//Logical Operators
// some values that can be applied to Booleans
// think of them as AND OR and NOT 
// && AND
// || OR
// ! NOT 
// ? used in ternary (3 operators) operators
console.log(true && false)
// => false
console.log(true || false)
// => true
console.log(true ? 1 : 2)
// => 1 when true it picks the middle value (1)
console.log(false ? 1 : 2)
// => 2 when it is false it picks the last value (2)







