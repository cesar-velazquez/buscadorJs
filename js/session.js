const closeSession = document.querySelectorAll('.btnLogOut');
const user = localStorage.getItem('nameUser');

closeSession.forEach(btn => {
    btn.addEventListener('click', finishSession);
})

document.getElementById('nameUser').textContent = `Usuario: ${user}`;

if (!user) {
    window.location.href = 'index.html';
}

function finishSession() {
    localStorage.removeItem('nameUser');
    window.location.href = 'index.html';
}
