// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let confirmasenhaInput = document.getElementById("confirma-senha");
let confirmasenhaLabel = document.querySelector('label[for="confirma-senha"]');
let usernameHelper = document.getElementById("username-helper");
const form = document.getElementById('form');
let value = '';

// Mostrar popup de campo obrigatório
function togglePopUp(label, input) {
    input.addEventListener("blur", (e) => {
        if (value.length === 0) {
            label.classList.add('required-popup')
            input.classList.add('error')
        } else {
            input.classList.remove('error')
            label.classList.remove('required-popup')
        }
    })
}

togglePopUp(usernameLabel, usernameInput)
togglePopUp(emailLabel, emailInput)

//Validar valor do input
usernameInput.addEventListener('change', (e) => {
    value = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
})