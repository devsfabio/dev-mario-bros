const btnFale = document.querySelector('.btn-fale-conosco');
const formulario = document.querySelector('.fale-conosco');
const mascara = document.querySelector('.mascara-form');
function handleClick() {
  formulario.style.left = '650px';
  mascara.style.visibility = 'visible';
}

function sumirForm() {
  formulario.style.left = '-340px';
  mascara.style.visibility = 'hidden';
}
