 //Criar um objeto de postagem de blog que contenha as seguintes propriedades:
//postagem
//titulo
//autor
//visualizações
//comentarios: (autor, mensagem)
//estaAoVivo ou Não

let postagem = {
    titulo: 'programar',
    mensagem: 'Alô, você',
    autor: 'Guilherme',
    visualizacoes: 10,
    comentarios: [
        { autor: 'josé', mensagem: 'bom dia!' },
        { autor: 'lu', mensagem: 'boa noite!' }
],
estaAoVivo: true
}
console.log(postagem)