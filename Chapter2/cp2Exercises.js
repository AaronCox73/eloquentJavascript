// Admittedly, I had to look at the solution for the first problem. 
//I think I was just not in a good coding mindset but I was able to do exercies 2 & 3 without looking at the solution
// update, my solution for problem 3 was not accurate, though it did technically work it is flawed

//Prompt 

//write a loop that makes seven calls to console.log to ouput the following triangle
/*
#
## 
###
####
#####
######
#######
*/

for (var line = "#"; line.length < 8; line += "#")
    console.log(line);

for (let i = "#"; i.length < 8; i += "#") {
    console.log(i)
}


//FIZZBUZZ
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizzbuzz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    }
}

// Their FizzBuzz solution 
for (var n = 1; n <= 100; n++) {
    var output = '';
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}

// Chessboard 
//write a program that creates a string that represents an 8x8 grid using new line characters to seperate lines
let num = 1
let chbrd = "# # # #"
let chbrd2 = " # # # #"
let size = 8
while (num <= size) {
    if (num % 2 === 0) {
        console.log(chbrd2)
    } else { console.log(chbrd) }
    num++
} // I DID IT! Turns out not really as my code only will do 4 checkers while theirs will change with "size" input

// Their solution 

let size = 8
let board = ""

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " "
        else
            board += "#"
    }
    board += "\n"
}
console.log(board)

