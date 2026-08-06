const titulo = document.querySelector(".display");
const btnAumentar = document.querySelector(".btnAumentar");
const btnDiminuir = document.querySelector(".btnDiminuir");

let contador = 0;

btnAumentar.addEventListener("click", function(){
    contador++;
    display.textContent = contador;
});

btnDiminuir.addEventListener("click", function(){
    contador--;
    display.textContent = contador;
});