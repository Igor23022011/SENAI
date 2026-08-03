let nomes = []
let idades = []

amigos.forEach(function(amigo) {
  nomes.push(amigo.nome)
  idades.push(amigo.idade)
})

console.log("Nomes:", nomes)
console.log("Idades:", idades)