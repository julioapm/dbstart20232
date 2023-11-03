//Exercício 1
class CirculoV1 {
    raio: number = 1;
    pontox: number = 0;
    pontoy: number = 0;
}
const c1 = new CirculoV1();
console.log(c1);
console.log(typeof c1);
c1.raio = 3;
c1.pontox = 2;
console.log(c1);

class CirculoV2 {
    raio: number;
    pontox: number;
    pontoy: number;
    constructor(r: number = 1, x: number = 0, y: number = 0) {
        this.raio = r;
        this.pontox = x;
        this.pontoy = y;
    }
}
const c2a = new CirculoV2();
console.log(c2a);
const c2b = new CirculoV2(3);
console.log(c2b);
const c2c = new CirculoV2(3,1,1);
console.log(c2c);

class CirculoV3 {
    constructor(
        public raio: number = 1,
        public pontox: number = 0,
        public pontoy: number = 0
    ){}
}
const c3 = new CirculoV3();
console.log(c3);

class CirculoV4 {
    constructor(
        private _raio: number = 1,
        private _pontox: number = 0,
        private _pontoy: number = 0
    ){}
    get raio() {
        return this._raio;
    }
    set raio(r: number) {
        this._raio = r;
    }
    calcularArea() {
        return Math.PI * this._raio**2;
    }
    calcularCircunferencia() {
        return 2 * Math.PI * this._raio;
    }
}

const c4 = new CirculoV4(3,1,1);
console.log(c4);
c4.raio = 5;
console.log(c4);
console.log(c4.calcularArea());

