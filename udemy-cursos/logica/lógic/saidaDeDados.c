#include <stdio.h>
#include <stdlib.h>

int main(){
    int idade, codigo;
    float preco1, preco2;
    char genero, produto1, produto2;
    
    produto1 : "computador";
    produto2 : "TV";
    genero : 'F';
    preco1 = 2100.5;
    preco2 = 1830.0;
    idade = 30;

    printf("Produtos: ");
    printf("O produto", produto1, "custa", preco1);
    printf("O produto %c", produto2, "custa %f", preco2 );
    printf("Codigo = %d", codigo);
    printf("Dados das pessoas: genero %c", genero, "e a idade de %d", idade, "anos");
}