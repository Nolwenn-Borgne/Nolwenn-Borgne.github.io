let burgerMenu = document.querySelector('.nav__icon');
let burgerIcon = burgerMenu.querySelector('i');
console.log(burgerIcon);
console.log(burgerIcon.firstChild);
let menuList = document.querySelector('.nav__list');
console.log(menuList);

burgerMenu.addEventListener('click', function(){
    menuList.classList.toggle('responsive');
    burgerIcon.classList.toggle('fa-times');
    burgerIcon.classList.toggle('fa-bars');    
});