export function somar(a: number, b: number): number {
    return a + b;
}

export async function somarAsync(a: number, b: number): Promise<number> {
    return a + b;
}

export function stringBinParaNumber(binString: string): number {
    if (!/^[01]+$/.test(binString)) {
        throw new Error('Número binário inválido.');
    }
    return parseInt(binString, 2);
}
