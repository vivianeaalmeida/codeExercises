function solution(statues) {
    let newArray = [];
    let count = 0;
    let arrayOrdenado = statues.sort((a, b) => a - b)
    
    for(let i = 0; i < arrayOrdenado.length; i++){
        
    }
}


/*
FALTA TUDO!
For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.
Ratiorg needs statues of sizes 4, 5 and 7.


[6, 2, 3, 8]
[2, 3, 6, 8]
[2, 3, 4, 5, 6, 7, 8]
foram necessários 3 números a mais.

1. ordenar o array do menor para o maior
2. verificar o que falta entre os numeros 3 e 6. n > 3 && n < 6. n+1, enquanto a condição for verdadeira.
3. array.push
4. count++ em cada array.push
4.1 array.sort ? no need



*/
