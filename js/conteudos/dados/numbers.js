/* 
    Tipo de dados numéricos(number)

        - inteiros
            São todos numeros sem serem fracionados
            exemplos: 55, 549, 365, 1.

        - reais(float)
            São todos numeros existentes sendo inteiros ou fracionados, positivos ou negativos.
            exemplos: 49.69, 55.6666, -25, -68.99

        - Não há numeros(NaN)
            Se em uma operação usar tipo numérico e strig ele não entendera, assim virando um Nan.
            exemplos:
            console.log("vitor tem" + 19);
        - Infinitos
            Funciona como se fosse o tipo boleano verificaria se é verdadeiro ou falso, logo apos 
            ele daria o resultado.
            exemplo:
            console.log("45 === infinity");

*/
let inteiros = 1;
console.log(inteiros);

let reais = 24.99;
console.log(reais);

let Nan = 'vitor';
console.log(Nan +  25, "anos");

console.log("45 === infinity");