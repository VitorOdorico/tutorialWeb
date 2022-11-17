#include <stdlib.h>
#include <stdio.h>

int main(void){
    int matriz[5][5];
    int l, c, soma=0;

    for(l=0;l<5;l++){
        for(c=0;c<5;c++){
            printf("Matriz [%d, %d]: ", l+1, c+1);
            fflush(stdin);
            scanf("%d", &matriz[l][c]);
        }
    }

    for(l=0;l<5;l++){
            for(c=0;c<5;c++){
                if(l == c)
                soma += matriz[l][c];
        }
    }
    printf("soma = %d", soma);

    return 0;

}