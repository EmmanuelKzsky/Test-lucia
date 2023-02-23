var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
  } else {
    menu.classList.add('menu-open');
  }
});
// Obtiene el botón para abrir el modal y el modal
const openModalBtn = document.getElementById('open-modal-btn');
const modal = document.getElementById('my-modal');

// Obtiene el botón para cerrar el modal
const closeModalBtn = modal.querySelector('.close');

// Agrega un evento click al botón de abrir el modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Agrega un evento click al botón de cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cierra el modal cuando el usuario hace clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
