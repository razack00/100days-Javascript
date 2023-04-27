
// Exercise Day2
const { is } = require("express/lib/request")

var firstName = "John"
var lastName = "Peter"
var country = "cameroon"
var city = "Yaounde"
var isMarried = true
var year = "2023"

console.log(typeof firstName, lastName, country, city, isMarried, year )

// return a boolean
var equal = 10 == 10

console.log(equal)

var equalTo = 4

var checkParseInt = parseInt(7,8)
var num = 7
console.log("hello" , checkParseInt == num)

console.log(parseInt(9.8) == 10)



var changeString = '30 days of javascript'

console.log(changeString.replace("javascript", "python"))

let email = "hello@gmail.com"
email = email.trim()
let emailIsValid =(email.includes(".") && email.includes("@"))

console.log(emailIsValid && "email is valid")
console.log(!emailIsValid && "email is not valid")


// email validation
function checkEmail(email) {
    email = email.trim()
    if (email.includes('@') && email.includes(".com")) {
        console.log("hello there email valid")
    }
    else {
        console.log("not valid")
    }
}

checkEmail("razack@gmail.com")

//  