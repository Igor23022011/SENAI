const h2 = document.querySelector("h2");
const btn = document.querySelector("button");
const analise = document.querySelector("#analise");

btn.addEventListener("click", function(){
    let primeiraDiv = document.createElement("div");
    primeiraDiv.textContent = h2.textContent
    analise.appendChild(primeiraDiv);

    let segundaDiv = document.createElement("div");
    segundaDiv.textContent = h2.innerHTML;
    analise.appendChild(segundaDiv);

    let terceiraDiv = document.createElement("div");
    terceiraDiv.textContent = h2.style.color;
    analise.appendChild(terceiraDiv);
});
