import { area, circunferencia as circ } from './circulo_funcoes';
import Circulo from './circulo_objeto';
import * as fs from 'node:fs/promises';

//Usando as funções
console.log(area(3.75));
console.log(circ(4));

//Usando classe
const umCirculo = new Circulo(10.5);
console.log(umCirculo.raio);
console.log(umCirculo.area());
console.log(umCirculo.circunferencia());

//Usando API de arquivo do Node.js
async function escrever() {
    const json = JSON.stringify(umCirculo);
    try {
        await fs.writeFile('dados.json', json);
    } catch (error) {
        console.error('Falha de escrita no arquivo.');
        console.error((error as Error).name);
        console.error((error as Error).message);
    }
}
escrever();