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

//Exemplo com herança
class Produto {
    #nome:string;
    #preco:number;

    constructor(nome:string, preco:number) {
        this.#nome = nome;
        this.#preco = preco;
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco;
    }

    set preco(valor:number) {
        this.#preco = valor;
    }

    toString() {
        return `[nome=${this.#nome}, preco=${this.#preco}]`;
    }
}

class ProdutoPerecivel extends Produto {
    #dataValidade:Date;

    constructor(nome:string, preco:number, dataValidade:Date) {
        super(nome, preco);
        this.#dataValidade = dataValidade;
    }

    get dataValidade() {
        return this.#dataValidade.toISOString();
    }

    toString() {
        return super.toString() + `[dataValidade=${this.dataValidade}]`;
    }
}

const produto = new Produto('caneta', 1.99);
const produtoPerecivel = new ProdutoPerecivel('queijo', 40, new Date(2023,11,30));
const produtos = [produto, produtoPerecivel];
produtos.forEach(p => console.log(p.toString()));

//Tipos e polimorfismo
const umaPessoa = new Pessoa('João Ninguém', 10);
const outraPessoa = {
    nome:'Fulano de Tal',
    idade:20,
    peso:65.50
};
console.log(typeof umaPessoa);
console.log(typeof outraPessoa);
console.log(umaPessoa instanceof Pessoa);
console.log(outraPessoa instanceof Pessoa);

function saudar(pessoa:Pessoa) {
    console.log(`Alô, ${pessoa.nome}!`);
}
saudar(outraPessoa);

type Nomeado = {nome:string, sobrenome?:string};
function saudarNomeado(coisa:Nomeado) {
    console.log(`Alô, ${coisa.nome}!`);
}
saudarNomeado(umaPessoa);
saudarNomeado(outraPessoa);

