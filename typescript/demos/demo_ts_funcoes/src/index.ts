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
