exibirPrimos(15)

    function exibirPrimos(numeros){
        for (let index = 2; index <= numeros; index++) {
            if (!(index % 2 === 0)&& !(index % 3 === 0) || (index === 2) || (index === 3)) 
            
            console.log(index)
        }
    }