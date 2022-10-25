/**
    Operadores lógicos
        && -> and -> e
            as duas expressões tem que ser verdadeiras para retornar verdadeira
        || -> or -> ou
            uma das duas expressões sendo verdadeiras ja irá retornar verdadeira

        ! -> not -> não retornará verdadeira

 */

const expressaoAnd = 10 > 5 && 5 < 10 ;
console.log(expressaoAnd);
// exemplo para login

const usuario = 'vitor';
const senha = 'minhasenha';

const login = usuario === 'vitor' && senha === 'minhasenha';
console.log('sucesso você fez: login:', login);



const expressaoOr = 10 > 5 || 5 > 10;
console.log(expressaoOr);

// exemplo de login com "or", mas é incorreto de usar

const loginIncorrect = usuario === 'vitor' || senha === 'minhasenha';
console.log('sucesso você fez login:', loginIncorrect);


const expressaoNot = (!false);