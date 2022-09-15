/*
    let and const
        - const e let são  locais  e só funcionam no escopo onde foi criado

    Block statement(bloco de declaração)
        inicia o bloco
        {
            aqui dentro  é um bloco  e pode colocar qualquer código

        }
        fecha o bloco


    

Exemplos a baixo:
*/
// Exemplo incorreto:

console.log('> existe x antes do bloco? ', x);
{
    let x = 1;
}

console.log("> existe x depois do bloco? ", x);

// Exemplo correto:
    let y = 0;
    // sendo definido a vareavel antes dos scopes(blocos), podem ser criados quantos quiserem.
    {
        y = 1;
        console.log('existe y antes do bloco? ', y);
    }
    console.log('existe y depois do bloco? ', y);
        //Existe se for criado apos o bloco, pois a let e const são vareáveis locais e não globais.

/* 
    Oque aconteceu aqui?

    A criação de tipo let e const, não  faz uma sobreposeção por conta propria, pois ela não é global,
    como ela está sendo criada a baixo do console.log ela não vai ler o valor na vareavel por causa do 
    estilo de leitura do JavaScript, que le de cima para baixo os códigos 
    
    
    Hoisting (Elevação)

*/


//  Exemplo const

{
    
    {
        // Não se pode atribuir valor a uma constante.
        a = 0;
        console.log('existe a', a);
        {
            //mas pode criar uma nova constante em outro bloco
            const a = 0;
            console.log('existe a', a);
        }
    }
    
}