const student = {
    matricule: '123456',
    name: {
        firstName: 'John',
        lastName: 'Doe',
    },
    image: 'ps5.webp',
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


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.profile-img').src = student.image
    document.querySelector('.name').textContent =`${student.name.firstName} ${student.name.lastName}`
    document.querySelector('.matricule').textContent = `${student.matricule}`
    document.querySelector('.gender').textContent = `${student.gender}`
    document.querySelector('.quater').textContent = `${student.address.quarter}`

    // const course = document.querySelector('.course-name').textContent = `${student.courses[0].courseName}`

    const container = document.querySelector('.container')

    const courses = student.courses

    let content = courses.map((course) => {
        return `<div class="course-info-container">
            <p>COURSE: <span class="course-name"> ${course.courseName} </span></p>
            <ul class="course-info">
            <div>
                <h5>COEF</h5>
                <li class="">${course.credits}</li>
            </div>
            <div>
                <h5>SCORE</h5>
                <li class="score">${course.score}</li>
            </div>
            <div>
                <h5>TEACHER</h5>
                <li class="teacher">${course.teacher.name.firstName} ${course.teacher.name.lastName}</li>
            </div>
            </ul> 
        </div>`
    } ) 
    container.innerHTML = content
})


 

