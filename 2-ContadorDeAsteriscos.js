//Criar uma função que exibe a quantidade de asteriscos '*'
//existentes em uma determinada linha

exibirAsteriscos(10);
function exibirAsteriscos(linhas) {

 let asterisco = '';

 for (let index = 0; index <= linhas; index++) 
 {
     asterisco += '*'
     console.log(index, asterisco)
 }
}