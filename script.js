const menuIcon= document.querySelector('#Menu-icon');
const navLinks= document.querySelector('.nav-links');

menuIcon.onclick= ()=> {
    navLinks.classList.toggle('active')
}