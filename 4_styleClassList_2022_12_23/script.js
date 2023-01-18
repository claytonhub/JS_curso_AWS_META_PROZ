const title = document.getElementsByClassName('title')
const error_text = document.getElementsByClassName('error-text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')
const success_message = document.getElementsByClassName('success-message')

console.log(username_input.value)
console.log(password_input.value)

function validateForms() {
    if (username_input.value != 'clayton') {
        error_text[0].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
    if (password_input.value != '321') {
        error_text[1].classList.add('visible')
    } else {
        error_text[1].classList.remove('visible')
    }
}

function showSuccessMessage() {
    success_message[0].classList.add('visible')
}