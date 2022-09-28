//Listar todos os nomes dos jogos já lançados da franquia GTA.
//Crie uma função que mostre todos os nomes dos jogos.

const allGame = 
[
    {name:'Grand Theft Auto', ano: 2000},
    {nome:'Grand Theft Auto 2', ano: 1990},
    {nome:'Grand Theft Auto V', ano: 1970}
]

// let game = () => {
//     allGame.forEach((item) => {
//     console.log(item.ano)
// });
// }

// let game = () => {
//     allGame.map((item) => {
//     console.log(item.ano)
//     })
// }

// let game = () => {
//     allGame.filter((item) => {

//          console.log(item.ano)
//     })
// }

let game = () => {
    allGame.find((item) => {
    const retorno = item.nome === 'Grand Theft Auto V'
        console.log(retorno)
    })
}
game();

// / console.log(marcas.find(marca => 
//     //  marca.nome === 'clara'
//     // ))