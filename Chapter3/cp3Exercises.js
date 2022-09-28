// minimum 
// write a function that takes two arguments and returns their minimum with math.min 

function min(min1, min2) {
    return Math.min(min1, min2)
}
console.log(min(10, 7.32))


// I believe that is what the exercise is asking me to do 

// solution from online 
function min(a, b) {
    if (a < b) return a;
    else return b
}


// recursion
// make a recursion function(meaning it calls itself) 
//that works for the numbers in the book on page 56


function isEven(N) {

}

// felt the instructions were confusing but also couldn't figure it out 
// from the book 
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

// still uncertain how this how above is working
// my idea is on the last line(34) it will run n-2 until it gets to 0 or 1


// bean counting
function countBs(str) {
    let bString = String(str);
    while (bString.length) { }
}



function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



// overall needed help on these exercises more than I would like to. 
//May have to revisit the chapter and do some more work with them