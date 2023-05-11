const student = {
    matricule: '123456',
    name: {
        firstName: 'john',
        lastName: 'Doe',
    },
    courses: [
        {
            courseNo: 'INFO-1010',
            courseName: 'ICT',
            credits: 10,
            score: 80,
            teacher: {
                matricule: '123896',
                name: {
                    firstName: 'John',
                    lastName: 'Wills',
                },
                qualification: 'PhD',
                experience: 10,
            }
        },
        {
            courseNo: 'INFO-1011',
            courseName: 'OOP',
            credits: 8,
            score: 70,
            teacher: {
                matricule: '123897',
                name: {
                    firstName: 'Mike',
                    lastName: 'Wills',
                },
                qualification: 'MASTERS',
                experience: 5,
            }
        },
        {
            courseNo: 'INFO-1012',
            courseName: 'JS',
            credits: 11,
            score: 90,
            teacher: {
                matricule: '123898',
                name: {
                    firstName: 'John',
                    lastName: 'Poter',
                },
                qualification: 'BD',
                experience: 7,
            }
        },
    ],
    yearOfBirth: 1999,
    address: {
        quarter: 'Bambili',
        city: 'Bamenda',
        region: 'North West',
        country: 'Cameroon'
    },
    gender: 'Male',
}

console.log(`Name: ${student.name.firstName} ${student.name.lastName},\nQuater: ${student.address.quarter}, \nGender: ${student.gender}`)

console.table(student.courses[0])