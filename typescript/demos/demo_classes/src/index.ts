//Classe com propriedades públicas
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    toString() {
        return `[idade=${this.idade}, nome=${this.nome}]`;
    }
}
const p1 = new Pessoa('John Doe', 22);
console.log(p1.toString());
p1.idade = 30;
console.log(p1.toString());

//Classe com propriedades privadas
class PessoaV2 {
    #nome: string;
    #idade: number;

    constructor(nome:string, idade:number) {
        this.#nome = nome;
        this.#idade = idade;
    }

    toString() {
        return `[idade=${this.#idade}, nome=${this.#nome}]`;
    }

    get idade() {
        return this.#idade;
    }

    set idade(valor:number) {
        this.#idade = valor;
    }
}
const p2 = new PessoaV2('John Doe', 22);
p2.idade = 30;
console.log(p2.idade);

//Classe com propriedades via parâmetros
class PessoaV3 {
    constructor(public nome:string, public idade:number){}
}
const p3 = new PessoaV3('John Doe', 22);
console.log(p3.nome);
