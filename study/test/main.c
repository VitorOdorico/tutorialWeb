#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void main(void){
	
	float valor, taxa, valor_final, valor_parcelado;
	int parcelas;
	
	
	printf("Qual o valor do imprestimo: ");
	scanf("%f", &valor);
	
	printf("Qual a taxa oferecida pelo banco: ");
	scanf("%f", &taxa);
	
	printf("Quantas parcelar ira ser feitas: ");
	scanf("%f", &parcelas);	

	valor_final = (valor * (taxa/100));
	
	valor_parcelado = (valor_final / parcelas);
		
	printf("O valor total do imprestimo fica: %f", valor_final);
	
	printf("\n\nO valor parcelado ficaria: %f", valor_parcelado);


}
