var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
  } else {
    menu.classList.add('menu-open');
  }
});
