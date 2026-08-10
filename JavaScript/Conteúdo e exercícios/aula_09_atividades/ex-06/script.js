const h1 = document.querySelector("h1");
const btnAlterar = document.querySelector("button");

btnAlterar.addEventListener("click", function(){
    h1.textContent = "Título Modificado com Sucesso!"
})