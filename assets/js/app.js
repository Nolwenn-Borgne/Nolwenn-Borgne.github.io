let burgerMenu = document.querySelector('.nav__icon');
let burgerIcon = burgerMenu.querySelector('i');
let menuList = document.querySelector('.nav__list');

burgerMenu.addEventListener('click', function(){
    menuList.classList.toggle('responsive');
    burgerIcon.classList.toggle('fa-times');
    burgerIcon.classList.toggle('fa-bars');    
});