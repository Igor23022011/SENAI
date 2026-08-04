let idades = [12, 18, 25, 30, 15, 42]

let maior = idades.find(function(item){
    return item > 25  // <- com 100 apareceu "undefined".
})

console.log(maior)