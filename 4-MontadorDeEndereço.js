// Criar um objeto endereço que contém:
//Rua, 
//Cidade, 
//CEP e 
//uma função exibirEndereço(endereço)
let endereco = {
    Rua: 'dois',
    Cidade: 'Contagem',
    CEP: '32010',
}

function exibirEndereco(endereco) {
    for (let chave in endereco) 
    console.log(`${chave}:`, endereco[chave])
}

exibirEndereco(endereco)