
import { Strategy } from './strategy.js';

export class golpeNormal extends Strategy {
    constructor(dano) {
        super();
        this.dano = dano
    }
    ataque(){
        this.restarVida(this.dano);
    }
}