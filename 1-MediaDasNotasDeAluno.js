//-Criar um código que calcule a média das notas de um aluno e retorne um dos conceito abaixo, a depender da pontuação do aluno.
//0-59: E
//60-69: D
//70-79: C
//80-89: B
//90-100: A
const array = [70, 70, 8000];
 
function notasDoAluno(array){
   const media = exibirMedia(array)

   if (media < 60) return 'E';
   if (media < 70) return 'D';
   if (media < 80) return 'C';
   if (media < 90) return 'B';
   return 'A';
}

function exibirMedia(array) {
   let soma = 0;
   for (let index = 0; index < array.length; index++) {
       soma += array[index];
   }
   return soma/array.length
}



console.log(notasDoAluno(array))