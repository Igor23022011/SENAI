function verificarIdade(idade) {
    if (idade <= 12) {
            return "Criança"
    }   else if (idade < 18) {
            return "Adolescente"
    }   else if (idade < 64) {
            return "Adulto"
    }   else {
            return "Idoso"
    }
}

let idades = [9, 15, 19, 32, 99]
idades.forEach(function(item) {
    console.log(verificarIdade(item))
})