
import { Strategy } from './strategy.js';

export class golpeMortal extends Strategy {
    constructor() {
        super();
    }
    ataque() {
        vida.textContent = 0;
    }
}