#include <stdlib.h>
#include <stdio.h>

// Faça um programa em C que receba os valores de uma matriz de caracteres 
// de 5x3(linha x coluna) e também receba um caractere.
//  Seu programa deve verificar se o caractere aparece dentro da matriz


int main(void){
    char matriz[5][3];
    char caracter;
    int l, c, achei=0;

    for(l=0;l<5;l++){
        for(c=0;c<3;c++){
            printf("Matriz[%d,%d]: ", l+1, c+1);
            fflush(stdin);
            scanf("%c", &matriz[l][c]);
        }
    }

    printf("Caracter ", l+1, c+1);
    fflush(stdin);
    scanf("%c", &caracter);
    for(l=0;l<5;l++){
        for(c=0;c<3;c++){
            if(matriz[l][c] == caracter){
                achei = 1;
            }
        }
    }
    // não se precisa usar o igual a 1
    //  pois no boleano qualquer numero que não seja 0 é dado como verdadeiro
    // portanto se achei recebe o valor de 1 ele se torna verdadeiro, mas
    // se não der o valor de 1 ele execulta o else e fala que não apareceu
    
    if(achei){
         printf("Aparece");
    }else{
        printf("Não aparece");
    }
    return 0;
}