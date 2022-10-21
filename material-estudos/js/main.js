/*
Operadores aritiméticos

    multiplicação(*)
    divisão(/)
    soma(+)
    subtração(-)

    Resto da divisão(%)
    incremento(++)
    decremento(--)
    exponencial(**)


*/
//multiplicação
let multiplicacao = 1*1;

//divisão
let divisao = 2/1;

//soma
let soma = 1+1;

//subtração
let subtracao = 10-5;

// resto da divisão
let resto = 11 % 9;

//incremento
let incremento = 0
incremento ++

//decremento
let decremento = 20;
decremento--;

//expodencial
let expodencial = 2 ** 2;

/*
Operador para agrupar expressões ( )
    usa-se para dar prioridade para alguma ação

Por exemplo:
*/
// Aqui nessa expressão como iria funcionar? primeiramente iria fazer por ordem de prioridade que seria (3 * 5) logo apos mais 2
let total = 2 + 3 * 5;
//resultado = 17
// Ja usando () podemos mudar a prioridade;
let total2 =  (2 + 3) * 5;
//resultado 25

/*
Operador de comparação
    ira comparar valores e retornar um bollean como respostaá comparação

    == Igual a
    != diferente de
    === estritamente igual a
    !== estritamente diferente a

Exemplos abaixo:
*/
//igual a

let one = 1;
let two = 2;
console.log(two == 1);
console.log(one == "1");

//diferente de

console.log(one != two);
console.log(one != 1);
console.log(one != "1");

//estritamente igual a
console.log(one === "1");
// exibe falso pois one(number) "1"(string)
console.log(one === 1);
// assim daria verdadeiro, pois a vareavel one é igual  a 1(numerico)

//estritamente diferente a
console.log(two !== "2");  
// exibe verdadeiro pois two(number) "2"(string)  
console.log(two !== 2);
// assim daria falso, pois a vareavel two é igual  a 2(numerico)


/*
Operador de comparação maior e menor 
    maior >
    menor <
    maior igual a >=
    menor igual a <=
Exemplos abaixo:
*/

console.log(one < two);
console.log(two > one);

console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);

console.log(one >= two);
console.log(one >= 1);
console.log(one >= 0);

console.log();
console.log();
console.log();
