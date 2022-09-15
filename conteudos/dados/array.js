/* 
    Array
        - uma lista
        - agrupamento de dado

            ["Vitor", 19]


*/

const forms = [
    'nome',
    'idade',
    'estados',
    {
        sexualidade: 'masculino',
        hobbies: 'estudar',
    }
]


/*
    Como o computador ira ler:

        const forms = [
1            'nome',
2            'idade',
3            'estados',
4        {
   1         sexualidade: 'masculino',
   2         hobbies: 'estudar',
        }
    ]


*/

// Como acessar esses dados do array?
console.log(forms[3].sexualidade);
 /*
    Oque aconteceu aqui?
        imprime no console a constante forms, o vetor(array) de posição 3, que é um objeto, depois busca o parametro sexualidade no objeto de array
 
 */

