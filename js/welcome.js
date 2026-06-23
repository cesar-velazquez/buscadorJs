const closeSession = document.getElementById('closeSession');
const user = localStorage.getItem('nameUser');

document.getElementById('nameUser').textContent = `Hola, ${user}`;

if (!user) {
    window.location.href = 'index.html';
}

function finishSession() {
    localStorage.removeItem('nameUser');
    window.location.href = 'index.html';
}



closeSession.addEventListener('click', () => {
    finishSession();
});

