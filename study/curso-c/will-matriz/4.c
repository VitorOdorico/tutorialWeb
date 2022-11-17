#include <stdlib.h>
#include <stdio.h>
#include <conio.h>

// Entrar com valores para uma matriz 3 X 4. Gerar e imprimir uma matriz B
// que é o triplo da matriz A.


int main(void){
   int mat1[3][4], mat2[3][4], l, c, val;
    // leitura matriz a 
    for(l=0;l<3;l++){
        for(c=0;c<4;c++){
            printf("De o Valor da matriz A: [%d  %d]", l+1, c+1);
            fflush(stdin);
            scanf("%d", &mat1[l][c]);
        }
    }
  for(l=0;l<3;l++){
        for(c=0;c<4;c++){
           
        }
        printf("%d", mat1[l][c]*3);
    }

}