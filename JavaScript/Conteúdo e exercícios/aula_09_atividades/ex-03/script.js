const btn = document.querySelector("#btnAcao");
const infoBotao = document.querySelector("#infoBotao");

btn.addEventListener("click", function(){
    infoBotao.textContent = btn.textContent
});