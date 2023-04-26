const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar-nav-2');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('change');
});
