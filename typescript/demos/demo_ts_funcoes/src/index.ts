function saudar() {
    console.log('Alô, Mundo!');
}
saudar();

function saudarComNome(nome:string) {
    console.log(`Alô, ${nome}!`);
}
saudarComNome('Júlio');

function criarSaudacao(nome?:string) {
    return `Alô, ${nome}!`;
}
function criarSaudacaoDefault(nome='anônimo') {
    return `Alô, ${nome}!`;
}
const saudacao = criarSaudacao('John Doe');
console.log(saudacao);
const saudacao2 = criarSaudacao();
const saudacao3 = criarSaudacaoDefault();
console.log(saudacao2);


const anonima = function (nome:string) {
    return `Alô, ${nome}!`;
};
console.log(anonima);
console.log(anonima('teste'));

const saudacaoArrow = (nome:string) => `Alô, ${nome}!`;
console.log(saudacaoArrow);
console.log(saudacaoArrow('teste2'));

//Execução imediata de funções
(function (x:number, y:number) {
    console.log(x+y);
})(1,2);

//Closure
function multiplicar(fator:number): (n:number) => number {
    return numero => numero * fator;
}
const mult2 = multiplicar(2);
const mult10 = multiplicar(10);
console.log(mult2(3));
let n = 5;
const multn = multiplicar(n);
n = 7;
console.log(multn(2));