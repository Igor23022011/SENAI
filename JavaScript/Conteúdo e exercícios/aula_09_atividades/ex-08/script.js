let p = document.querySelector('#textoColorido');
let btnVermelho = document.querySelector('#btnVermelho');
let btnAzul = document.querySelector('#btnAzul');
let btnVerde = document.querySelector('#btnVerde');

btnVermelho.addEventListener('click', function() {
  p.style.color = "red"
});

btnAzul.addEventListener('click', function() {
  p.style.color = "blue"
});

btnVerde.addEventListener('click', function() {
  p.style.color = "green"
});