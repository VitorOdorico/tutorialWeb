/*
   Scope e var
        - escopo  determina a visibilidade de alguma vareável no Js

    Block statement(bloco de declaração)
        inicia o bloco
        {
            aqui dentro  é um bloco  e pode colocar qualquer código

        }
        fecha o bloco


    

Exemplos a baixo:
*/
console.log('> existe x antes do bloco? ', x);
{
    var x = 1;
}

console.log("> existe x depois do bloco? ", x);

/* 
    Oque aconteceu aqui?

    A criação de tipo var, por si só já faz uma sobreposeção, pois ela é global, como ela está sendo 
    criada a baixo do console.log e automaticamente ela vai subir e ficar a cima do bloco. esse
    conceito se chama "hoisting"
    
    Hoisting (Elevação)

*/



//como é feito por baixo dos panos

var x;
console.log('> existe x antes do bloco? ', x);
{
    x = 1;
}
console.log("> existe x depois do bloco? ", x);

const a = 1;