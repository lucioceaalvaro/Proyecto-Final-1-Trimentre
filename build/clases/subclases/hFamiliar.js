"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HFamiliar = void 0;
const habitaciones_1 = require("../habitaciones");
class HFamiliar extends habitaciones_1.Habitacion {
    constructor(tipo, IDHab, camas, pNoche, supletoria) {
        super("f", IDHab, camas, pNoche);
        this._supletoria = false;
        this._supletoria = supletoria;
    }
    get supletoria() {
        return this._supletoria;
    }
}
exports.HFamiliar = HFamiliar;
