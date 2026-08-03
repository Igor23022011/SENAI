console.log("Antes de remover:", carro)

delete carro.placa

console.log("Depois de remover:", carro)
console.log("placa ainda existe?", "placa" in carro)    