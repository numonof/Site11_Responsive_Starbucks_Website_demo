let menu = document.getElementById('menu-icon')
let nav = document.querySelector('.nav');
function onClick() {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}