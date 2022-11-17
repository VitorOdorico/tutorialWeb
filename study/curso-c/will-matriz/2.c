#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
// Criar um algoritmo que leia os elementos de uma matriz inteira 10 X 10 e
// escreva todos os elementos, exceto os elementos da diagonal principal.

int main(void){
    char mat[10][10];
    int l, c , i;
        for(l=0;l<10;l++){
            for(c=0;c<10;c++){
                printf("\n Informe os numeros: [%d, %d]", l, c);
                fflush(stdin);
                scanf("%c", &mat[l][c]);           
            }
        }
        l=0;
    while (l<10){
        c =0;
        while (c<10){
        if (l!=c){
        printf("\nMatriz[%d, %d] = %d", l, c, mat[l][c]);
        }
        c++;
        };
        l++;
    }
}

