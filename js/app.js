/**
 * Regex
 * 
 * regular expression
 * 
 * [a-z] => it matches lowercase letters
 * [A-Z] => it marches uppercase letters
 * [^A-Z] => it matches an non-uppercase letter
 * [^a-z] => it an non-lowercase letter
 * [0-9] => matches any digits
 * [^0-9] => an non-numberical character
 * \d => equivalent to [0-9]
 * \D = equivalent to [^0-9]
 * . => matches any songle charactr excpet line terminators
 * [A-Za-z] => matches any letter, lowercase or uppercase
 * \w => matches any alphanumeric character [a-zA-Z0-9]
 * \W => this matches any special characters
 * \s => whitespace
 * \S => check for any characters other than white space
 * $ => match the end of an input
 * ^ match the beginning of an input
 * 
 */
// const regex = /\D/ // matches lowercase letter
// // const regex = /[A-Z]/

// let myString = 'Hello'

// regex.test(str) => returns true or false

// console.log(myString.match(regex))
// console.log(regex.test(myString)) // test to see if there any lowercase letters

// const regex2 = /s$/

// myString = 'I sure do love to cade'

// if (myString.match(regex2)) {
//     console.log('match')
// } else {
//     console.log('no match')
// }


const confirmBtn = document.getElementById('confirmBtn')

let user = {
    id: 1,
    username: '',
    password: ''
}

// verify password

const verifyPassword = ()=> {
    const username = document.getElementById('username'). value

    const password = document.getElementById('password'). value

    console.log(`username: ${username}; password: ${password}`)
}

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    verifyPassword()
})
