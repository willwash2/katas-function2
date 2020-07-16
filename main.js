// Katas 1 ADD

function add(x, y) {
    return x + y
}
console.log(add(2, 5))

// Katas 2 Multiply

function multiply(x, y) {
    let total = 0
    for (let i = 0; i < y; i++) {
        total = add(x, total)
    }
    return total
}
console.log(multiply(7, 6))

// Katas 3 power

function power(x, y) {
    let total = 1
    for (let i = 0; i < y; i++) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(2, 9))

// Katas 4 factorial

function factorial(x) {
    let total = 1
    for (let i = x; i > 1; i--) {
        total = multiply(i, total)

    }
    return total
}
console.log(factorial(5))




