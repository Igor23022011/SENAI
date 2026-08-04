let palavras = ["Sol", "Montanha", "Lua", "Estrela", "Mar"]

let harshWords = palavras.filter(function(item){
    return item.length > 3
})

console.log(harshWords)