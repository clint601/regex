/**
 * Regex
 * 
 * Regular Expressions
 * 
 * [a-z] => matches lowercase letters
 * [A-Z] => matches uppercase letters
 * [^A-Z] => a non-uppercase letter
 * [^a-z] => a non-lowercase letter
 * [0-9] => matches any digits
 * [^0-9] => a non-numerical character
 * \d => equivalent to [0-9]
 * \D => equivalent to [^0-9]
 * . => matches any single character except line terminators
 * [A-Za-z] => matches any letter, lowercase or uppercase
 * \w => matches any alphanumeric character [a-zA-Z0-9]
 * \W => special characters
 * \s => whitespace
 * \S => any character other than whitespace
 * 
 * $ => matches the end of an input
 * ^ => matches the beginning of an input
 */

// const regex = /ki/ 

// let myString = 'I like to eat apples'


// regex.test(str) => returns true or false 
// console.log(regex.test(myString))

// const regex2 = /[^I][s$]/

// myString = 'I sure do love to codes'

// if (myString.match(regex2)) {
//     console.log('match')
// } else {
//     console.log('no match')
// }

const confirmBtn = document.getElementById('confirmBtn')

let userObj = {
    id: 0,
    username: '',
    password: '',
    dateCreated: '',
    passwordDate: ''
}

let users = []

// verify password
const verifyPassword =()=> {
    const username = document.getElementById('username').value

    const password = document.getElementById('password').value 

    const lowerTest = /[a-z]/
    const upperTest = /[A-Z]/
    const numTest = /\d/
    const specialTest = /\W/

    const display = document.getElementById('display')
    const reqList = document.createElement('ul')

    if (password.length < 8) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Password must be at least 8 characters'
        reqList.appendChild(reqItem)
    } else {
        document.getElementById('eightChar').style.color = 'green'
    }

    if (!password.match(lowerTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one lowercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match(upperTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one uppercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match(numTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one digit (0-9)'
        reqList.appendChild(reqItem)
    }

    if (!password.match(specialTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one special character'
        reqList.appendChild(reqItem)
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/gm

    username.length == 0 ? alert('Please enter a username') : null 

    // if (password.match(regex)) {
    //     display.innerText = 'Account created'
    // } else {
    //     display.appendChild(reqList)
    // }

    password.match(regex) ? createUser(username, password) : display.appendChild(reqList)
}

const matchPasswords =()=> {
    const password = document.getElementById('password').value 

    const confirmPassword = document.getElementById('confirmPassword').value 

    const matchDisplay = document.getElementById('matchDisplay')

    password != confirmPassword ? matchDisplay.innerText = 'Passwords do not match' : verifyPassword()
}

const createUser =(user, pass)=> {
    userObj = {
        id: users.length + 1,
        username: user,
        password: pass
    }

    console.log(userObj)
    users = [...users, userObj]
    console.log(users)
    const display = document.getElementById('display')
    display.innerText = `User ${userObj.username} created`
}

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    matchPasswords()
})