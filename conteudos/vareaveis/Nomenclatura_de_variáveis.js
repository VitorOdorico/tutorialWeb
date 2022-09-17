/*
    Nomenclatura de vareáveis em Js

        - JavaScript é case-sensitive (sensitivel ao caso)

            Ou seja letras maiúsculas e minúsculas causam diferença sim.

        - JavaScript aceita a cadeia de caracteres Unicode

            Ou seja ela aceita ser usado aspas simples e duplas
    
    Oque pode?

        - Iniciar com esses caracteres especiais : $ _
        - Iniciar com letras
        - Colocar acentuação
        - Letras maiúsculas e minusculas fazem diferenças

    Oque não pode?

        - Iniciar com números
        - Colocar espaços vazios no nome da vareável

    Forma ideal para criação
        - Criar nos que fazem sentidos
        - Nomes que explicam ou fazem lembrar oque a vareável faz
        - CamelCase
        - snake_case
        - Escrever em inglês os nomes das vareáveis

*/

// Exemplos a baixo


//      Oque pode?

//        - Iniciar com esses caracteres especiais : $ _
                let $name = 'Vitor';
                let _name = 'Vitor';

//        - Iniciar com letras
                let Pares = [0, 2, 4, 6, 8, 10];
//        - Colocar acentuação
                let Física = 'ódio';
//        - Letras maiúsculas e minusculas fazem diferenças
                let Maiúsculas = [A, B, C, D, E];
                let minúsculas = [a, b, c, d, e];

//      Oque não pode?

//     - Iniciar com números
                let 123 = 1234;
//     - Colocar espaços vazios no nome da vareável
                let Nav bar = "nav-bar";

//      Forma ideal para criação

//     - Criar nomes que fazem sentidos
                let pares = [0, 2, 4, 6, 8, 10];
//     - Nomes que explicam ou fazem lembrar oque a vareável faz
                let NumerosImpares = [1, 3, 5, 7, 9];
//     - CamelCase
                let UsarUmaMaiusculaNosEspaçamentosDasPalavras; 
//     - snake_case
                let usar_um_underline_nos_espaçamentos_das_palavras;
//     - Escrever em inglês os nomes das vareáveis
                let Cart;