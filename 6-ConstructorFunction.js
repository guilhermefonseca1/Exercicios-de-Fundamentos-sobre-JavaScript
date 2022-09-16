      //Constructor Function
//Criar um objeto postagem com:
//titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('primeiro', 'segundo', 'terceiro');
console.log(postagem);