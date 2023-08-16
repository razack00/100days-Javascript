
// datatypes
var string = "string"
var boolean = true
var nothing
var empty = null
var nums = 656
var floatNum = 5.86643

console.log(typeof string, boolean, nothing, empty, nums, floatNum)

//non-primitive datatypes in javascript include: objects and arrays
//non-primitive datatypes are modifiable and mutable. their values can be changed

//An array is a list of values in a square bracket


// even if non-primitive data types have the same values, they are not strictly equal. example:
let numb = [2,3,4]
let numbers = [2,3,4]

console.log(nums == numbers)

const myArray = [ 34, 534,343,2,34,5]


// console.log(myArray[0])

// an array for 5 years of birth

let yearsOfBirth = []

yearsOfBirth.push(1994)
yearsOfBirth.push(1995)
yearsOfBirth.push(1996)
yearsOfBirth.push(1997)
yearsOfBirth.push(1998)

console.log('year one', 2023 - yearsOfBirth[0] )
console.log('year two', 2023 - yearsOfBirth[1] )
console.log('year three', 2023 - yearsOfBirth[2] )
console.log('year four', 2023 - yearsOfBirth[3] )
console.log('year five', 2023 - yearsOfBirth[4] )

//objects

let stOjd = {
    firstName: 'peter',
    lastName: 'mikel',
    yearOfBirth: 1998,
    courses: [
        {
        courseName: 'Graphic Design',
        coef: 3,
        marks: 18,
        Teacher: 'James Fox'
        },
        {
        courseName: 'web development',
        coef: 3,
        marks: 28,
        Teacher: 'James Fox'
        }
],
    isMarried: false,
    dayOfCleaning: 'wednesday',
    mail: 'petermikel@gmail.com',
    skills: ['Basketball', 'HTML', 'CSS', 'JS'],
    parents: [
        {
        firstName: "papapi",
        lastName: "harry"
        }
    ]
}


let coursesOffered = stOjd.courses

if (coursesOffered.length > 1) {
    console.log(`${stOjd.firstName} offers ${coursesOffered.length} courses. his score for each course include:`)
    // for(let count = 0; count < coursesOffered.length; count++) {
    //     console.log(`${coursesOffered[count].courseName} : ${coursesOffered[count].marks}`)
    // }
    coursesOffered.forEach((course) => {
        console.log(`${course.courseName} : ${course.marks}`)
    })
}

else {
    console.log(`${stOjd.firstName} offers ${coursesOffered.length} course`)
}


// console.log(coursesOffered[0].marks)

let students = [
    {
        firstName: 'peter',
        lastName: 'mikel',
        yearOfBirth: 1998,
        course: [
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            },
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            }
    ],
        isMarried: false,
        dayOfCleaning: 'wednesday',
        tell: +23753670081,
        mail: 'petermikel@gmail.com',
        skills: ['Basketball', 'HTML', 'CSS', 'JS'],
        parents: [
            {
            firstName: "papapi",
            lastName: "harry"
            }
        ]
    },
    {
        firstName: 'peter',
        lastName: 'mikel',
        yearOfBirth: 1998,
        course: [
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            },
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            }
    ],
        isMarried: false,
        dayOfCleaning: 'wednesday',
        tell: +23753670081,
        mail: 'petermikel@gmail.com',
        skills: ['Basketball', 'HTML', 'CSS', 'JS'],
        parents: [
            {
            firstName: "papapi",
            lastName: "harry"
            }
        ]
    },
    {
        firstName: 'peter',
        lastName: 'mikel',
        yearOfBirth: 1998,
        course: [
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            },
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            }
    ],
        isMarried: false,
        dayOfCleaning: 'wednesday',
        tell: +23753670081,
        mail: 'petermikel@gmail.com',
        skills: ['Basketball', 'HTML', 'CSS', 'JS'],
        parents: [
            {
            firstName: "papapi",
            lastName: "harry"
            }
        ]
    },
    {
        firstName: 'peter',
        lastName: 'mikel',
        yearOfBirth: 1998,
        course: [
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            },
            {
            courseName: 'Graphic Design',
            coef: 3,
            marks: 18,
            Teacher: 'James Fox'
            }
    ],
        isMarried: false,
        dayOfCleaning: 'wednesday',
        tell: +23753670081,
        mail: 'petermikel@gmail.com',
        skills: ['Basketball', 'HTML', 'CSS', 'JS'],
        parents: [
            {
            firstName: "papapi",
            lastName: "harry"
            }
        ]
    },
]


