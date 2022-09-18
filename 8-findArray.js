//O método 'find' retorna o valor do primeiro elemento do array
//que satisfaz a condição desejada, caso contrário, ele retorna undefined

//Encontre dentro do objeto marcas o objeto chamado guilherme

const marcas = [
    {id:1 , nome: 'laura'},
    {id:2 , nome: 'clara'},
    {id:3 , nome: 'guilherme'},
];

const marca = marcas.find(function(marca) {
    return marca.nome === 'guilherme';
});

console.log(marca);
