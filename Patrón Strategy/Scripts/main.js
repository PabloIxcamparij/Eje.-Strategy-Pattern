import {Contexto} from './contexto.js';
import { golpeNormal } from './strategies/strategyGolpeNormal.js';
import { golpeCritico } from './strategies/strategyGolpeCritico.js';
import { golpeVariable} from "./strategies/strategyGolpeVariable.js"
import { golpeMortal } from './strategies/strategyGolpeMortal.js';

// Referencia de los botones
const botonReinicio = document.getElementById("reinicio");
const botonGolpeA = document.getElementById("golpeNormal");
const botonGolpeB = document.getElementById("golpeCritico");
const botonGolpeC = document.getElementById("golpeVariable");
const botonGolpeD = document.getElementById("latex");

// Referencia de la vida
const vida = document.getElementById("vida");

const ContextoStragy = new Contexto();
const mortal = new golpeMortal();
const normal = new golpeNormal(10);
const critico = new golpeCritico(30);
const variable = new golpeVariable();


botonGolpeA.addEventListener("click", function () {
    ContextoStragy.procesarStrategyAtaque(normal)
});

botonGolpeB.addEventListener("click", function () {
    ContextoStragy.procesarStrategyAtaque(critico)

});

botonGolpeC.addEventListener("click", function () {
    ContextoStragy.procesarStrategyAtaque(variable)
});

botonGolpeD.addEventListener("click", function () {
    ContextoStragy.procesarStrategyAtaque(mortal)
});

botonReinicio.addEventListener("click", function () {
    vida.textContent = 1000;
});