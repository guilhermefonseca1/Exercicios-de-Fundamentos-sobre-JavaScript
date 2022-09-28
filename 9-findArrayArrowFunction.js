//O método 'find' retorna o valor do primeiro elemento do array
//que satisfaz a condição desejada, caso contrário, ele retorna undefined

//Encontre dentro do objeto marcas o objeto chamado guilherme


let marcas = [
    {id: 1, nome: 'guilherme'},
    {id: 2, nome: 'clara'},
]

// console.log(marcas.find(marca => 
//  marca.nome === 'clara'
// ))

// console.log(marcas.find(marcaNome =>
//     marcaNome.nome === 'guilherme'))

const findMarcas = () => {
    const retorno = marcas.find(({ nome }) => nome === 'clara')
        console.log(retorno);
    }

findMarcas()