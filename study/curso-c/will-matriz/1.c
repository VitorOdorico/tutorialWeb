// Criar um algoritmo que leia os elementos de uma matriz inteira 10 X 10 e
// escreva os elementos da diagonal principal.

#include <stdlib.h>
#include <stdio.h>
#include <conio.h>

int main(void){
    char matriz[10][10];
    int l, c,i;

    for(l=0;l<10;l++){
        for(c=0;c<10;c++){
            printf("De o valor da matriz [%d, %d]", l, c);
            fflush(stdin);
            scanf("%c", &matriz[l][c]);
        }
    }

    for(i=0;i<10;i++){
        printf("\n%d", matriz[i][i]);
    }

}