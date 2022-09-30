// Manipulando Array

let frutas = ["maça", "uva", "pessego", "tomate"];

// adicionar um item ao fim do array
frutas.push("damasco");

// Adicionar um item ao inicio de um array
frutas.unshift("framboesa");
// remover do fim
frutas.pop();
// remover do começo
frutas.shift();
// pegar somente alguns elementos do array
console.log(frutas.slice(1, 4));
// remover 1 ou mais itens em qualquer posição do array
frutas.splice(1);
// encontrar a posição de um elemento no array
let index = frutas.indexOf('uva');