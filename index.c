#include <stdio.h>
#include <stdlib.h>]
FILE*fp;
//--------------------------------------------
struct cliente{
   char nome[30];
   char endereco[30];
   char tel[18];
   char status;
};
struct cliente cli[100];
int i=0;
//--------------------------------------------
void iniciar(){
 int x;
 for(x=0;x<=99;x++){
    cli[x].status='0';
 }
}
//--------------------------------------------
int busca_posicao(){
  int x;
  for(x=0;x<=99;x++){
    if(cli[x].status=='0'){
       break;
    }
  }
  return x;
}
//--------------------------------------------
void incluir(){
   system("cls");
   i=busca_posicao();
   printf("\nDigite Nome: ");
   scanf("%s", &cli[i].nome);
   printf("\nDigite Endereco: ");
   scanf("%s", &cli[i].endereco);
   printf("\nDigite Telefone: ");
   scanf("%s", &cli[i].tel);
   cli[i].status='1';
   printf("\nCliente Incluido com sucesso!!");
   getche();
}

//--------------------------------------------
void consultar(){
  int x;
  for(x=0;x<=99;x++){
    if(cli[x].status=='1'){
        printf("\n\nNome: %s", cli[x].nome);
        printf("\nEndereco: %s", cli[x].endereco);
        printf("\nTelefone: %s", cli[x].tel);
    }
  }
  getche();
}
//--------------------------------------------
void excluir(){
  int x;
  char nome[30], conf;
  system("cls");
  printf("\nDigite um nome para busca: ");
  scanf("%s", nome);
  for(x=0;x<=99;x++){
     if(strcmp(nome, cli[x].nome)==0){
        printf("\n\nNome: %s", cli[x].nome);
        printf("\nEndereco: %s", cli[x].endereco);
        printf("\nTelefone: %s", cli[x].tel);
        printf("\nDeseja excluir s/n ?");
        conf=getche();
        if(conf== 's' || 'S'){
            cli[x].status='0';
        }
       
     }
  }
}
//--------------------------------------------
int main()
{
    char op;
    iniciar();
    do{
       system("cls");
       printf("\n1. Incluir");
       printf("\n2. Consultar");
       printf("\n3. Excluir");
       printf("\n4. Sair");
       op=getche();
       if(op=='1'){
         incluir();
       }
       else if(op=='2'){
         consultar();
       }
       else if(op=='3'){
         excluir();
       }
       else if(op=='4'){
        printf("\n\nFim de programa");
        getche();
       }
       else{
         printf("\n\nOpcao invalida");
         getche();
       }
    }while(op!='4');
}