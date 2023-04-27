function dateOfBirth() {
    let now = new Date().getFullYear()
    let year = parseInt(window.prompt('enter your year of birth'))
    let age = now - year
    if(age < 21){
        alert(`${age} not eligible`)
    }else if( age >= 21) {
        alert(`you are ${age} so you are eligible to vote`)
    }
    else {
        alert('invalid year, enter a valid year please')
        let year = parseInt(window.prompt('enter your year of birth'))
    }
}

function changeGreeting() {
    const currentGreeting = document.querySelector('h1')
    if(currentGreeting.innerText === 'Hello!') {
        currentGreeting.innerText = 'GoodBye'
        document.querySelector('.b').innerText = 'Greet'
    } else {
        currentGreeting.innerText = 'Hello!'
        document.querySelector('.b').innerText = 'Bye'
    }
}

let counter = 0
function count() { 
    counter += 1
    document.querySelector('h3').textContent = counter
    counter % 10 === 0 && alert("hello")
    counter % 2 !== 0 && alert("odd")
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.counter').onclick = count
    document.querySelector('.b').onclick = changeGreeting
})

