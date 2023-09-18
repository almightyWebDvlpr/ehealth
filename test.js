let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');


const navLink = document.querySelector('.nav__link')
const dropdwn = document.querySelector('.dropdown');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});

navLink.addEventListener('click', () =>{
    dropdwn.classList.toggle('open')
    console.log('fssdfds')
})