const array = [70, 70, 80];

mediaDoAluno(array);

function mediaDoAluno(array) {
   let somaDoArray = 0;

   for (let index = 0; index < array.length; index++) {
       somaDoArray += (array[index])
// console.log(somaDoArray)
  media = (somaDoArray/array.length)

  console.log(media)
}
// return media;
}