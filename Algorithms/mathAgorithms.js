// Fibonacci sequence

// Big-O time and space complexity for a fibonacci sequence
function fibonacci(n) {
    let seq = [0,1]
    for(let i = 2; i < n; i++) {
        seq[i] = seq[i-1] + seq[i-2]
    }
    return seq
}
console.log(fibonacci(7))
// Big 0 = 0(n) which means it a linear time compexity (dependent on input)


// Factorial of numbers(find out Big-O time complexity)
function factorial(n) {
    let result = 1
    for(let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(factorial(3))
// Big 0 = 0(n)


// Prime Number(determine the Big-O )
function isPrime(n) {
    if(n < 2) {
        return ("hello")
    }
    for(let i = 2; i < n; i++) {
        if(n%i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(7))