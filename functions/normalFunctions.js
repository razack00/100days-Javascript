// a function is a block of code that performs a specific task

function myFunc() {
    return "hello, world"
}

console.log(myFunc())

function add(a , b) {
    return a + b
}

console.log(add(5,6))



// function that greets
function greet(name) {
    return `Hello ${name}`
}
console.log(greet('bruce'))

// function that converts marks
function markCalc(marks, indended, current) {
    return (marks * indended) / current
}
console.log(markCalc(90, 20, 100))


function checkEven(num) {
    if(num % 2 == 0) {
        return `${num} is an even number`
    }
    else {
        return `${num} is not an even number`
    }
}
console.log(checkEven(7))