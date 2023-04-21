//Question one
let yearOfBirth = 1999
let now = new Date()
let age = parseInt(now.getFullYear() - yearOfBirth)

if(age <= 2) {
    console.log("You fall under Infant")
}
else if(age >= 2 && age < 4 ) {
    console.log("you fall under Toddlers")
}
else if(age >= 5 && age < 12 ) {
    console.log("you fall under children")
}
else if(age >= 13 && age < 19 ) {
    console.log("you fall under Adolescents")
}
else if(age >= 20 && age < 39 ) {
    console.log("you fall under young adults")
}
else if(age >= 40 && age < 59 ) {
    console.log("you are a middle age adult")
}
else if(age > 60) {
    console.log("you are a senior citizen")
}
else {
    console.log("input a valid year of birth")
}


// Question 2

let day = "sunday"
day = day.toLowerCase().trim()
let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]

if(weekdays.includes(day)) {
    console.log(`${day} is a working day`)
}
else if(day == 'saturday' || day == 'sunday') {
    console.log(`${day} is a weekend`)
}
else {
    console.log('input a valid day')
}




