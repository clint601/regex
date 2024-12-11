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

let userObj = {
    id: 0,
    username: '',
    password: '',
    dateCreated: '',
    passwordDate: ''
}

let users = []

// verify password

const verifyPassword = ()=> {
    const username = document.getElementById('username'). value

    const password = document.getElementById('password'). value

    // console.log(`username: ${username}; password: ${password}`)

    const lowerTest = /[a-z]/ // test to see if there a lower case letter
    const upperTest = /[A-Z]/
    const numTest = /\d/
    const specialTest = /\W/

    const display = document.getElementById('display')
    const reqList = document.createElement('ul')

    if (password.length < 8) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Password must be at least 8 characters'
        reqList.appendChild(reqItem)
    }

    if (!password.match (lowerTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'must contain at least one lowercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match (upperTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one uppercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match (numTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one digit (0-9)'
        reqList.appendChild(reqItem)
    }

    if (!password.match (specialTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one special test  letter'
        reqList.appendChild(reqItem)
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/gm

    username.length == 0 ? alert('Please enter a username'): null

    // if (!password.match(regex)) {
    //     display.innerText = 'Account created'
    // } else {
    //     display.appendChild(reqList)
    // }

    password.match(regex) ? createUser(username, password) : display.appendChild(reqList)
}
const matchPasswords = ()=> {
    const matchPassword = document.getElementById('matchPassword'). value

    const confirmPassord = document.getElementById('confirmPassword').value

    const matchDisplay = document.getElementById('matchDisplay')

    password != confirmPassord ? matchDisplay.innerText = 
    'Passwords do not match' : verifyPassword()

}

    const createUser =(user,pass)=> {
        userObj = {
            id: user.length + 1,
            username: user,
            password: pass
        }

        users = [...users, userObj]

        const display = document.getElementById('display')
        display.innerText =`User ${userObj.username} created`
    }

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    // verifyPassword()
    matchPasswords()
})
