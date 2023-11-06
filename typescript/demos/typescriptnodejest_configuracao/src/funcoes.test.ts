import { somar, somarAsync, stringBinParaNumber } from './funcoes';

describe('somar', () => {
    test('deve retornar 3 para 1 + 2', () => {
        //Arrange
        const a = 1;
        const b = 2;
        const resultadoEsperado = 3;
        //Act
        const resultadoAtual = somar(a,b);
        //Assert
        expect(resultadoAtual).toBe(resultadoEsperado);
    });
    test.each([[0,0,0],[1,0,1],[-1,-1,0],[0,-1,1]])
        ('deve retornar %i para %i + %i', (r,a,b) => {
            expect(somar(a,b)).toBe(r);
    });
});

describe('stringBinParaNumber', () => {
    describe('dada uma string binária inválida', () => {
        test('deve gerar exceção para "abc"', () => {
            expect(() => stringBinParaNumber('abc')).toThrow();
        });
        test('deve gerar exceção Error para "abc"', () => {
            expect(() => stringBinParaNumber('abc')).toThrow(Error);
        });
        test('deve gerar exceção com mensagem específica para "abc"', () => {
            expect(() => stringBinParaNumber('abc')).toThrow('Número binário inválido.');
        });
    });
    describe('dada uma string binária válida', () => {

    });
});

describe('somarAsync', () => {
    test('retornar 2 para 1 + 1', async () => {
        const r = await somarAsync(1,1);
        expect(r).toBe(2);
    });
    test('deve retornar 0 para 0 + 0', async () => {
        await expect(somarAsync(0,0)).resolves.toBe(0);
    });
});