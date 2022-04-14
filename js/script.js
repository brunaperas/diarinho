const getFotos = document.querySelector('.get-fotos');
const setFotos = document.querySelector('.set-fotos');

function activeClass() {
  getFotos.classList.toggle('active');
  setFotos.classList.toggle('active');
}
getFotos.addEventListener('click', activeClass);
setFotos.addEventListener('click', activeClass);