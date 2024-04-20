
import { Strategy } from './strategy.js';

export class golpeVariable extends Strategy {
    constructor() {
        super();
    }
    ataque() {
        const random = Math.random();
        if (random <= 0.5) {
           this.restarVida(80);
        }
        else{
            console.log("Fallo")
        }
    }
}