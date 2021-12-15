"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HBasica = void 0;
const habitaciones_1 = require("../habitaciones");
class HBasica extends habitaciones_1.Habitacion {
    constructor(tipo, IDHab, camas, pNoche, desayuno) {
        super("b", IDHab, camas, pNoche);
        this._desayuno = false;
        this._desayuno = desayuno;
    }
    get desayuno() {
        return this._desayuno;
    }
}
exports.HBasica = HBasica;
