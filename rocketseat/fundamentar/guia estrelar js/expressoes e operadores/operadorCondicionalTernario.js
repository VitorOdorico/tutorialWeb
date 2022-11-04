/*
    Operador condicional(ternario)

    Depende da condição, recebe valores diferentes
    condição entrão valor 1 se nao valor 2
    Condition? Value1 : value2

    Exemplos
    café da manha top
    Maior de 18

*/

let pao = true;
let queijo = true;

const CafeExcelente = pao && queijo ? 'café top' : 'cafe ruim'
    console.log(CafeExcelente)

    const CafeTantoFaz = pao || queijo ? 'café top' : 'cafe ruim'
    console.log(CafeTantoFaz)

let idade = 19;
    const PodeDirigir = idade => 18 ? 'Você pode dirigir' : 'Você não pode dirigir';
    console.log(PodeDirigir)