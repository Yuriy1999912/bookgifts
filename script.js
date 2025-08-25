// Burger toggle
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');


function toggleMenu() {
const isOpen = menu.classList.toggle('show');
burger.setAttribute('aria-expanded', String(isOpen));
}


burger?.addEventListener('click', toggleMenu);


// Close on link click
menu?.addEventListener('click', e => {
if (e.target.tagName === 'A') menu.classList.remove('show');
});


// Close on outside click
window.addEventListener('click', e => {
if (!menu.contains(e.target) && !burger.contains(e.target)) {
menu.classList.remove('show');
burger.setAttribute('aria-expanded', 'false');
}
});


// Close on Escape
window.addEventListener('keydown', e => {
if (e.key === 'Escape') {
menu.classList.remove('show');
burger.setAttribute('aria-expanded', 'false');
}
});
