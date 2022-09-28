// Retorne o objeto que não tem o parâmetro ano
const allGame = 
[
    {name:'Grand Theft Auto', ano: [] },
    {nome:'Grand Theft Auto 2', ano: 1990},
    {nome:'Grand Theft Auto V', ano: 1970}
]

let someAno = () => {
    const retorno = allGame.some(({ ano }) => ano.length === 0 )
    console.log(retorno)
}
someAno()