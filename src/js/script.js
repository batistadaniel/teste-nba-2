let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Mostra o menu ao clicar no botao
btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir-menu');
});

// Fecha o menu ao clicar no botao
menu.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
    // overlay.style.display = 'none';
});

// Fecha o menu ao clicar fora
overlay.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});
