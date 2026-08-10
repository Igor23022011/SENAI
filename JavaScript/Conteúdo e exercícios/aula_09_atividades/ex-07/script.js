const conteudo = document.querySelector("#conteudo");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    conteudo.innerHTML = "< strong >Negrito</ strong > e < em >Itálico< /em >";
})