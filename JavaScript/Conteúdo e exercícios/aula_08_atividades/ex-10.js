let numeros = [5, 12, 8, 21, 3, 15, 7]

let maiores = numeros.filter(function(item){
    return item.length > 100
})

console.log(maiores)