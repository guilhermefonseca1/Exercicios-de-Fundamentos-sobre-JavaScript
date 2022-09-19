const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();



//Removendo números no FINAL do array
const ultimo = numeros.pop();
console.log(ultimo)
console.log(numeros)

//Removendo números no INÍCIO do array
const inicio = numeros.shift();
console.log(inicio)
console.log(numeros)

//Removendo números no MEIO do array
const meio = numeros.splice(2,1)
console.log(numeros)