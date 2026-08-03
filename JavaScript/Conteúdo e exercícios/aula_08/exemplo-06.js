let produtos = [
    {id: 1, nome: "celular"},
    {id: 2, nome: "computador"}
]

let encontrado = produtos.find(function(item){
    return item.id === 2
})

console.log(encontrado)