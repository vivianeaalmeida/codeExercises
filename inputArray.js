function solution(inputArray) {
    let product = [];
    for(let i = 0; i < inputArray.length - 1; i += 2){
        product.push(inputArray[i]*inputArray[i+1])
    }
    return Math.max(...product);
}

//nao passa em todos os testes
//length - 1 para ele parar um elemento antes e sempre ter um seguinte.

/* SOLUÇÃO CORRETA: pois queria que eu multiplicasse cada elemento lado a lado, e não em pares. Ops Viviane
function solution(inputArray) {
    let product = [];
    for(let i = 0; i < inputArray.length - 1; i++){
        product.push(inputArray[i]*inputArray[i + 1])
    }
    return Math.max(...product);
}
*/
