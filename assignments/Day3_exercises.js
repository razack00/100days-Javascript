// Day 3: Exercises

// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "John"
let lastName = "Peter"
let country = "cameroon"
let city = "Yaounde"
let isMarried = true
let year = "2023"

console.log(typeof firstName,typeof lastName, typeof country, typeof city, typeof isMarried, typeof year )

// 2. Check if type of '10' is equal to 10
let num1 = '10'
let num2 = 10
console.log(num1 === num2)

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10)

// 4. Boolean value is either true or false.
//   a .Write three JavaScript statement which provide truthy value.
console.log(5 == 5)
//   b. Write three JavaScript statement which provide falsy value
console.log('5' === 5)

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log('question 5')
// a. 4 > 3  = True
console.log(4 > 3)

// b. 4 >= 3 True
console.log(4 >= 3)

// c. 4 < 3 False
console.log(4 < 0)

// d. 4 <= 3 False
console.log(4 <= 3)

// e. 4 == 4 True
console.log(4 == 4)

// f. 4 === 4 True
console.log(4 === 4)

// g. 4 != 4 False
console.log(4 != 4) 

// h. 4 !== 4 False
console.log(4 !== 4)

// i. 4 != '4' False
console.log(4 != '4')

// j. 4 == '4' True
console.log(4 == '4')

// k. 4 === '4' False
console.log(4 === '4')

// l. Find the length of python and jargon and make a falsy comparison statement.
console.log("falsy comparison: ", 'python'.length != 'jargon'.length)


// 6. figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// a. 4 > 3 && 10 < 12 True
console.log(4 > 3 && 10 < 12)
// b. 4 > 3 && 10 > 12 False
console.log(4 > 3 && 10 > 12)
// c. 4 > 3 || 10 < 12 True
console.log(4 > 3 || 10 < 12)
// d. 4 > 3 || 10 > 12 True
console.log(4 > 3 && 10 < 12)
// e. !(4 > 3)False
console.log(!(4 > 3))
// f. !(4 < 3)
console.log(!(4 < 3))
// g. !(false) True
console.log(!(false))
// h. !(4 > 3 && 10 < 12) False
console.log(!(4 > 3 && 10 < 12))
// i. !(4 > 3 && 10 > 12) True
console.log(!(4 > 3 && 10 > 12))
// j. !(4 === '4') True
console.log(!(4  === '4'))
// k. There is no 'on' in both dragon and python =false
console.log(!("python".includes('on')) && !("jargon".includes('on')))

// 7. Use the Date object to do the following activities
let now = new Date()
// a. What is the year today? 
console.log(now.getFullYear())
// b. What is the month today as a number?
console.log(now.getMonth())
// c. What is the date today?
console.log(now.getDate())
// d. What is the day today as a number?
console.log(now.getDay())
// e. What is the hours now?
console.log(now.getHours())
// f. What is the minutes now?
console.log(now.getMinutes())
// g. Find out the numbers of seconds elapsed from January 1, 1970 to now
console.log((new Date().getTime()))


// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

function promptMe() {
    let base = prompt('enter base')
    let height = prompt('enter height')
    let area = 0.5 * base * height
    document.querySelector('h1').innerText = `The areaaa of the triangle ${area} `
}

// 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and andcalculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

function triangle() {
    let a = parseInt(prompt("Enter side a: "))
    let b = parseInt(prompt("Enter side b: "))
    let c = parseInt(prompt("Enter side c: "))
    let perimeter = a + b + c
    document.querySelector('h3').innerText = `The perimeter of the triangle is ${perimeter}` 
}

// 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
function rectangle() {
    let length = parseInt(prompt("Enter side length: "))
    let width = parseInt(prompt("Enter side width: "))
    let area = length * width
    let perimeter = 2 * (length + width)
    document.querySelector('.rectangle').innerText = `The area of the rectangle is ${area} \n The perimeter of the rectangle is ${perimeter}` 
}

// 2.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function circle() {
    let radius = parseInt(prompt("Enter radius of  circle: "))
    let pi = 3.14
    let area = pi * radius * radius
    let circumference = 2 * pi * radius
    document.querySelector('.rectangle').innerText = `The area of the circle is ${area} \n The circumference of the circle is ${circumference}` 
}
// 3. Calculate the slope, x-intercept and y-intercept of y = 2x -2


// 4. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// 5. Compare the slope of above two questions.
// 6. Calculate the value of y (y = x + 6x + 9). Try to use different x values and figure out at what x value y is 0. 
// 7. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

