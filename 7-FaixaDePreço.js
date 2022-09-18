//Criar um array de objetos chamado FaixaDePreços igual aquele usado no mercado livre
//O tipo do objeto será faixaDePreço
//Crie uma unção para instanciar esses objetos
//Esse array de objetos deve ter o nome de faixas
//bem como as propriedades: tooltip, valor mínimo e valor máximo
// let faixaDePreco = [
//     {tooltip: 'até R$700', minimo: 0, maximo: 700},
//     {}]
// console.log(faixaDePreco)

function faixaDePreco(tooltip, minimo, maximo) {
    return {
    tooltip,
    minimo,
    maximo
    }
}

let faixaDePreco2 = [
    faixaDePreco('a',1,100)
]
console.log(faixaDePreco)
console.log(faixaDePreco2)