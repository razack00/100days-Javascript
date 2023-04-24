

// function addThree(a, b) {
//     let sum = a + b;
//     return sum;
// }

// console.log(addThree(4, 8));
// console.log(addThree(5, 10));
// console.log(addThree(100, -55));


// // function to Greet

// function name(name){
//     return `Hello ${name}`
// }

// console.log(name('Rasty'))
// console.log(name('Razack'))

// function maricles(marks, indended, current,) {
//     return (marks * indended) / current
// }

// console.log(maricles(90, 20, 100))


// function number(num) {
//     if(num % 2 == 0) {
//     return `${num} is an even number`
//     }

//     else {
//         return `${num} is not an even number`
//     }

// }
// console.log(number(5))


const height = 10;
for(let row = 1; row<= height; row++) {
    let stars = "";
    for(let col = 1; col<=height - row; col++) {
        stars +='';
    }
    for(let col = 1; col<=1*row-1;col++) {
        stars +='*';
    }

    console.log(stars)
}



function table(number){
    for(var i=1; i<=10; i++){
    var res = i*number;
    console.log(` ${number} x ${i} = ${res}`);

    }
} 

table(1);


function triangle(star) {
    for(let r = 1; r <= 5; r++) {
        let stars = ''
        for(let c = 0; c < r; c++) {
            stars += star
        }
        console.log(stars)
    }
    return ""
}

console.log(triangle("*"))
