array = [1, 3, 10, 11, 14]
goal = 13

let found = false
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        if(array[i] + array[j] == 13) {
            console.log(array[i], array[j])
            found = true
        }
    }
    if(found){break}
}