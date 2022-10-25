/*
    falsy
        false
        0
        '', "", ``
        null / undefined
        Nan
    
        OBS: qualquer coisa diferente desses valores é considerado verdadeiro em js


*/

function falarOi(){
    return 'oi';
}

const vaiExecultar = 'vitor';
console.log(vaiExecultar && falarOi());