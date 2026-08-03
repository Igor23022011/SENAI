let alunos = [
    {nome: "Igor", nota: 9},
    {nome: "Bruna", nota: 7}
]

let nomes = alunos.map(function(aluno) {
    return aluno.nome
})

console.log(nomes)