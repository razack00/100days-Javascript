let yearsOfBirth = []

yearsOfBirth.push(1994)
yearsOfBirth.push(1995)
yearsOfBirth.push(1996)
yearsOfBirth.push(2006)
yearsOfBirth.push(1998)

let age = null;
let isEligible = false;

for (let counter = 0; counter < yearsOfBirth.length; counter ++) {
    age = 2023 - yearsOfBirth[counter];
    isEligible = age >= 21;
    console.log(`you are ${age} year old since you are bor in ${yearsOfBirth[counter]} and ${isEligible ? 'you can vote' : 'you cannot vote'} `)
}