using System;
using Primeiro;
using pessoa;
using study;


class Program{
    static void Main(string[] args){
        var person = new pessoa();

        person.Nome = "Vitor";
        person.Idade = 19;
        person.dataNascimento = "26/02/2003";
        person.Localidade = "Paraná";

        var person2 = new pessoa();
    
        person2.Nome = "Thainara";
        person2.Idade = 21;
        person2.dataNascimento = "12/12/2001";
        person2.Localidade = "Paraná";

        var livrosApp = new  livrosApp();
        livrosApp.livro = "";
        livrosApp.paginaInicial = 23;
        livrosApp.paginasLidas = 54;
        livrosApp.dia = 23;
        livrosApp.mes = 2;
        livrosApp.checkListConclusao = 'S';



        var classe = new Classe();
        var classe2 = new Segundo.Classe();
    }
}

