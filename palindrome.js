function solution(inputString) {
    let re = /[^A-Za-z0-9]/g;
    let str = inputString.toLowerCase().replace(re, '');
    let tam = inputString.length;
    
    for(let i = 0; i < tam/2; i++){
        if(str[i] !== str[tam - 1 - i]){
            return false;
        }
    }
    return true;
}
