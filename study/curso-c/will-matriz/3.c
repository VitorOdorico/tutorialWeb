#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
// Criar um algoritmo que armazene dados em uma matriz de ordem 5 e
// imprima toda a matriz.

int main(void){
    char matriz[5][5];
    int l, c;

    for(l=0;l<5;l++){
        for(c=0;c<5;c++){
            printf("\nInforme os valores da matriz [%d, %d]", l, c);
            fflush(stdin);
            scanf("%c", matriz[l][c]);

        }
    }
    printf("Matriz [%d, %d", matriz);
    return 0;
}