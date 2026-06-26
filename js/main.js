////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Función Login Falso 
const users = [
    {
        username: 'admin@gmail.com',
        password: 'Admin2#$'
    },
    {
        username: 'cesar',
        password: 'Cesar2#$'
    },
    {
        username: 'jan',
        password: 'Jan2#$'
    },
    {
        username: 'teo',
        password: 'Teo2#$'
    },
    {
        username: 'zena',
        password: 'Zen2#$'
    },
];
// 

let userInput = document.getElementById('user');
let passInput = document.getElementById('password');
let btnLogin = document.getElementById('signIn');
let showError = document.getElementById("errorLogin");
let hiddenError = document.getElementById("removeLogin");

btnLogin.addEventListener('click', validateAccount);

hiddenError.addEventListener('click', hiddenMessageError);



function validateAccount(event) {
    event.preventDefault();
    const foundUser = users.find(user => userInput.value === user.username && passInput.value === user.password);

    if (foundUser) {
        localStorage.setItem('nameUser', foundUser.username);
        window.location.href = 'welcome.html';
    } else {
        showMessageError();
    }
}

function hiddenMessageError(event) {
    event.preventDefault();
    showError.classList.add('hidden');
}

function showMessageError() {
    showError.classList.remove('hidden');
}