let produtos = [
    {id: 1, nome: "Lightstick", preco: 179, categoria: "colecionável"},
    {id: 2, nome: "Geladeira", preco: 2599, categoria: "Eletrodoméstico"},
    {id: 3, nome: "Mouse", preco: 109, categoria: "Informática"},
    {id: 4, nome: "Teclado", preco: 299, categoria: "Informática"},
    {id: 5, nome: "Fogão", preco: 599, categoria: "Eletrodoméstico"}
]

let nomes = produtos.map(function(item){
    return item.nome
})
console.log(nomes)

let eletro = produtos.filter(function(item){
    return item.categoria === "Eletrodoméstico"
})
console.log(eletro)

let encontrado = produtos.find(function(item){
    return item.id === 3
})
console.log(encontrado)

let nomeMaiores = produtos.filter(function(item){
    return item.preco > 500
}).map(function(item){
    return item.nome
})

console.log(nomeMaiores)