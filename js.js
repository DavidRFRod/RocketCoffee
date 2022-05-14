const menu = document.getElementsByClassName('menu');
const openBurger = document.querySelector('#open-buguer');


function toggleMenu() {
    
    const nav = document.querySelector('nav');
    nav.classList.add('active')
    
}

openBurger.addEventListener('click', toggleMenu);