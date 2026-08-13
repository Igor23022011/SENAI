let caixa = document.querySelector('#caixa')
let btn = document.querySelector('#btnEstilo')

btn.addEventListener('click', function() {
  caixa.style.backgroundColor = "yellow"
  caixa.style.border = "2px solid black"
  caixa.style.padding = "20px"
})