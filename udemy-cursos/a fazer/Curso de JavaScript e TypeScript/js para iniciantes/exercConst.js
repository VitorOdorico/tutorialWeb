const nome = 'luiz otavio';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let anoAtual = 2022
var IMC = peso / (altura * altura);

   // console.log('Seu imc é de: ', IMC);
let anoNascimento = (anoAtual - idade);
   // console.log(anoNascimento)

//function imcTest (calculo){
    // IMC;
    // altura;
    // if (IMC < 18.5) {
    //     console.log('esta abaixo do peso');
    // };
    // if (IMC <= 24.9) {
    //     console.log('esta no peso ideal');
    // };
    // if (IMC => 25  | 29.9 ){
    //     console.log("esta a cima do peso")
    // }
    // if (IMC => 30 | 34.9) {
    //     console.log("obesidade grau |")
    // }
    // if(IMC => 35 | 39.9) {
    //     console.log("obesidade grau ||")
    // }
    // if (IMC => 40) {
    //     console.log("obesidade morbita")
    // }
    

//}

     


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);