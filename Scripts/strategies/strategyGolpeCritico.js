
import { Strategy } from './strategy.js';

export class golpeCritico extends Strategy {
    constructor(dano) {
        super();
        this.dano = dano
    }
    ataque(dano) {
        const random = Math.random();
        if (random <= 0.4) {
            this.restarVida(this.dano * 3);  
            console.log("Daño critico conseguido")
        } else {
            this.restarVida(this.dano);
        }
    }
    
}
