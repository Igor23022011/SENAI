let filmes = [
    {titulo: "Matrix", ano:1999, genero: "Ficção"},
    {titulo: "Interestelar", ano: 2014, genero: "Ficção"},
    {titulo: "Titanic", ano: 1997, genero: "Romance"},
    {titulo: "Avatar", ano: 2009, genero: "Ficção"},
    {titulo: "Coringa", ano: 2019, genero: "Drama"},
]

let titulos = filmes.map(function(item){
    return item.titulo
})

let generos = filmes.filter(function(item){
    return item.genero === "Ficção"
})

let ano = filmes.find(function(item){
    return item.ano === 1997
})

let combo = filmes.filter(function(item){
    return item.titulo 
}).map(function(item){
    return item.ano >= 2000
})

console.log(combo)