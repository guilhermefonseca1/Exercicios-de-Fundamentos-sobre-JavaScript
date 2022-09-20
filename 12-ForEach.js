const numeros = [1,2,3,4,5];

numeros.forEach(number => 
    console.log(number));

numeros.forEach((number, index) => 
console.log(number, index));

numeros.forEach((number, index, arrayDeTodosNumeros) => 
console.log(number, index, arrayDeTodosNumeros))