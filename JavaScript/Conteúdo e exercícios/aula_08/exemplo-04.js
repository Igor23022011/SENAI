let alunos = [
    {nome: "Igor", nota: 9},
    {nome: "Bruna", nota: 5}
]

let aprovados = alunos.filter(function(aluno){
    return aluno.nota >= 7
})

console.log(aprovados)