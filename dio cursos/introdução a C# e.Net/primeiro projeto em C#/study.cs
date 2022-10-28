using System;
using System.Collections.Generic;
using System.Text;
// namespace
//    Usado para organizar as classes;
//      Para usar uma classe de outro namespace, colocamos using,no começo do código;
//      Não se pode ter mais de uma classe em um namespace


namespace Csharp{
    class Test{
        int valor1 = 10;
        int valor2 = 20;
        
        var soma = valor1 + valor2;

    };
};

// classes
//      uma classe pode ter campos, propriedades, métodos e eventos dentro dela que são denominados membros.
//      E quando uma classe é instanciada, essa instância é chamada de objeto, e nesse objeto podem ser criados os valores de acordo com os campos da classe.

class Programa{
    static void Main(){
        
    }
}

// interface
//      é como uma classe base que serve de molde para varias classes.
//      uma classe que implementa uma interface deve implementar todos os membros

namespace animal{
    interface Ianimal
{
    void nome(string nome);
    void dono(string dono);
    void especie(string especie);

}
class animal : Ianimal{
    public string nome { get; set; }
    public string dono { get; set; }
    public string especie { get; set; }

    void Ianimal.nome(string nome){
        this.nome = nome;
    }
    void Ianimal.dono(string dono){
        this.dono = dono;
    }
    void Ianimal.especie(string especie){
        this.especie = especie;
    }


}
}
