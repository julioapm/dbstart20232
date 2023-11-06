export default class Circulo {
    constructor(public raio:number) {}

    area() {
        return Math.PI * this.raio**2;
    }

    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}
