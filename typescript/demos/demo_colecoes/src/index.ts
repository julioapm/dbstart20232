const numeros = [1,2,3,4,5];
const caracteres:string[] = [];
console.log(numeros);
console.log(numeros[0]);
numeros[0] = 0;
console.log(numeros);
console.log(numeros.length);
console.log(numeros.indexOf(10));

console.log('Imprimindo elementos do array com for:');
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log('Imprimindo elementos do array com iterador via for_of:');
for(const n of numeros) {
    console.log(n);
}

console.log('Imprimindo elementos do array com método forEach:');
numeros.forEach(n => console.log(n));

console.log('Imprimindo elementos do array com método forEach:');
numeros.forEach((n,i) => console.log(`numeros[${i}]=${n}`));

const palavras = ['alfa', 'bravo', 'charlie', 'delta'];
const r1 = palavras.map(p => p.length);
console.log(r1);
const r2 = palavras.filter(p => p.length > 4);
console.log(r2);
const r3 = palavras.reduce((anterior,atual) => atual.length + anterior, 0);
console.log(r3);

const mapa = new Map<string,string>();
mapa.set('RS', 'Rio Grande do Sul');
mapa.set('SC', 'Santa Catarina');
mapa.set('PR', 'Paraná');
console.log(mapa.get('RS'));
console.log('Imprimindo todas as chaves:');
for(let chave of mapa.keys()) {
    console.log(chave);
}
console.log('Imprimindo todos os valores:');
for(let valor of mapa.values()) {
    console.log(valor);
}

const conjunto = new Set<number>();
conjunto.add(1);
conjunto.add(2);
conjunto.add(1);
console.log(conjunto.size);
