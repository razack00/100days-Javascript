
// LOOPS

// exercises day 4

for (let counter = 0; counter < yearsOfBirth.length; counter ++) {
    age = 2023 - yearsOfBirth[counter];
    isEligible = age >= 21;
    console.log(`you are ${age} year old since you are bor in ${yearsOfBirth[counter]} and ${isEligible ? 'you can vote' : 'you cannot vote'} `)
}