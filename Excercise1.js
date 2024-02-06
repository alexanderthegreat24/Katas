function displayMessage(x) {
    console.log(typeof x)
    let message = 'Hello'
    if (x) {
        message = 'Hello, this is a scope problem!'
    }
    return message;
}

console.log(displayMessage(true))
console.log(displayMessage(false))
console.log(displayMessage('emiliano'))
console.log(displayMessage(0))

// console.log(canAccess('admin', true))
// console.log(canAccess('admin', false))
// console.log(canAccess('user', false))
// console.log(canAccess('user', false))