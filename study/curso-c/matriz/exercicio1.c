#include <stdio.h>
#include <stdlib.h>

int main(){
    int l, c, m[2][2];

    for(l=0;l<2;l++){
        for(c=0;c<2;c++){
            printf("Digite o valor  da linha:  %d coluna:  %d  ",  l+1, c+1);
            scanf("%d", &m[l][c]);
        }
    }
    for(l=0;l<2;l++){
        for(c=0;c<2;c++){
            printf("%d", m[l] [c]); 
        }
        printf("\n");
    }
    return(0);
}