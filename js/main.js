/*
    função construtora

        * expressão new
        * cria um novo objeto
        * this keyword


    exemplo a baixo:
*/


function Person(name){
    this.name = name;
    this.walk = function(){
        return this.name + 'está andando';

    }
}

const vitor = new Person("Vitor");
const joao = new Person("Joao");
console.log(vitor.walk());
console.log(joao.walk());

