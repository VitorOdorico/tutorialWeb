// console.log('1 para prosseguir')
// console.log('2 para parar o processo');
// numberOne = 1;
// numberTwo = 2;
// let expression = numberOne;

// switch(expression){
//     case 1:
//         console.log('Funcionou')
//         break
//     case 2:
//         console.log('processo encerrado')
//         break
//     default:
//         console.log("não é uma opção valida")
//         break
// }

function calculator(numberOne, numberTwo, Operator){
    let result;
    let porcent;
    switch(Operator){
        case '+':
            result = numberOne + numberTwo;
            console.log(result)
            break
        case '-':
            result = numberOne - numberTwo; 
            console.log(result)
            break
        case '*':
            result = numberOne * numberTwo; 
            console.log(result)
            break
        case '/':
            result = numberOne / numberTwo; 
            console.log(result)
            break
        default:
            console.log('nao é um operador valido')
    }   
}

console.log(calculator(10,20,'+'))