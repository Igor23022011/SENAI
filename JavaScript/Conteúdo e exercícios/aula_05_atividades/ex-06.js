let idade = 15

function verificarIdade(idade) {
    if (idade <= 12) {
            return "Criança"
    }   else if (idade < 17) {
            return "Adolescente"
    }   else if (idade < 64) {
            return "Adulto"
    }   else {
            return "Idoso"
    }
}