
export class Strategy {
    constructor(dano) {
        this.dano = dano;
    }
    restarVida(dano) {
        let valorVidaActualizado = parseInt(vida.textContent) - dano;
        vida.textContent = valorVidaActualizado;
    }
}