import prompt from "prompt-sync";

class Personagem {
    nome: string = "";
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number= 0;

}

// let nome = "Jon";

let sansa: Personagem;
sansa= new Personagem();
sansa.nome = "Sansa Stark"
sansa.ataque = 10
sansa.energia = 20
sansa.defesa = 50
sansa.vida =100 
console.log("person=", sansa)


//let jon: Personagem = new Personagem()
//jon.nome= "jon snow";
//jon.ataque= 80;
//jon.defesa = 70;
//jon.energia = 90;
//jon.vida = 40;
//console.log(jon);

// construotor

class Personagem2 {
    nome: string = "";
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number= 0;

        constructor(nome: string, ){ // so posso chamar construtor na criação do objeto como parametro so obrigado a declarar
            this.energia = 50
            this.ataque = 50
            this.nome = nome
        }
}

let sansa2: Personagem2;
sansa2= new Personagem2("Sansa Stark");
sansa2.ataque = 10
console.log("person=", sansa2)



class Personagem3 {  // outra forma de declaração - nesse modelo exijo que os argmentos sejam preenchidos
        constructor (
            public nome: string, 
            public energia: number, 
            public vida: number,
            public ataque: number,
            public deefesa: number )
            { 
            this.energia = 50
            this.ataque = 50
            this.nome = nome;
        }
}

let sansa3: Personagem3;
sansa3 = new Personagem3('Sansa Media', 100, 50, 44, 321);





