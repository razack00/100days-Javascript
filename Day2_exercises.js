// Day 2: Exercises

// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript"

// 2. Print the string on the browser console using console.log()
console.log(challenge)

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method
challenge.toLowerCase()

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 2))

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3))

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"))

// 9. Split the string into an array using split() method
console.log(challenge.split())

// 10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

// 13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

// 14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(12))

// 15.Use indexOf to determine the position of the first occurrence of a in 30 Days
console.log(challenge.indexOf('a'))

// 16 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

// 17 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))

// 18. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))

// 19. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim())

// 20. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("3"))

// 21. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("t"))

// 22. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g))

// 23. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let sen1 = '30 Days of'
let sen2 = 'JavaScript'
console.log(sen1.concat(sen2))

// 24. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'python'))

//Exercise: Level 2
//1. Using console.log() print out the following statement
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//1 Check if typeof '10' is exactly equal to 10. If not make it exactly equal
let num1 = '10'
let num2 = 10
console.log(num1 === num2)
console.log(num2 === parseInt(num1))

//2 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseInt(9.8) == 10);
//make it true:
console.log(Math.round(9.8) == 10)

//3 Check if 'on' is found in both python and jargon
console.log('check', 'python'.includes('on') &&  'jargon'.includes('on'))

//4 hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('hope this course is not full of jargon'.includes('jargon'))

//5 Generate a random number between 0 and 100 inclusively.
console.log(Math.random() * 101)

//6 Generate a random number between 50 and 100 inclusively
console.log(Math.random() * (50) + 50)

//7 Generate a random number between 0 and 255 inclusively
console.log(Math.random() * 256)             
//8 Access the 'JavaScript' string characters using a random number
let hello = "JavaScript"
console.log(hello[Math.floor(Math.random() * (hello.length))])

//9 Use console.log() and escape characters to print the following pattern 1 1 1 1 12 1 2 4 83 1 3 9 274 1 4 16 645 1 5 25 125
console.log('1 1 1 1 12 1 2 4 83 1 3 9 274 1 4 16 645 1 5 25 125')

//1. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substring(sentence.indexOf('because'), sentence.lastIndexOf('because') + 8))


// exercises: level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence2.match(/love/gi).length, "loves")

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/g).length, 'because')

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $isno@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I foundtea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to bea tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence3.replace(/[%,&,$,@,#,;]/gi, ''))

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomes = sentence4.match(/\d+/g)
console.log(incomes)

income = 0
for (i = 0; i < incomes.length; i++) {
    income += parseInt(incomes[i])
}
console.log(`Annual Total Income = ${income} euros`)



// Exercises: level 3

// var equalTo = 4


