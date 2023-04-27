// Operators

// operators are symbols that are use perform operations between 2 values or variables 

//     They are classified in 5 categories
// 1 - Arithmetic operators: these include addition, subtraction multiplication division and division

console.log(23 + 4)
console.log(4 - 3)
console.log(4 * 3)
console.log(4 / 3)

// Parse is used mostly to change the type of a value
console.log(parseInt(4.77777))
// toFixed is used to specify the number of decimal points. NB: this also changes the type of the number to a string
let floatNum = ((11 / 14).toFixed(2))
console.log(floatNum)
// math.round used to round a floating point number to the nearest possible number either up or down
let rounding = Math.round(3.5555)
console.log(rounding)

// 2 - Assignment operators: used assign to variables (=)

var variable = "assignment operator"

// 3 - comparison operators: used to  compare values and return a boolean result

console.log(2 > 3)
console.log(2 < 3)
console.log(2 >= 3)
console.log(2 == 3)
console.log(2 === 3)
console.log(2 != 3)
console.log(2 !== 3)

// logical operators
// &&, ||, !

// Bitwise opperators

//
let d = 'erere trtere ererre'
d = d.split(" ").join("-")

console.log(d)