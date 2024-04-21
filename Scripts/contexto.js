export class Contexto {
    constructor() {
        this.estrategia = null;
    }
    
    procesarStrategyAtaque(estrategia){
        this.estrategia = estrategia;
        this.estrategia.ataque();
    }
}