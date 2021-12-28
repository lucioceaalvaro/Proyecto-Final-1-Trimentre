"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HVip = void 0;
const habitaciones_1 = require("../habitaciones");
class HVip extends habitaciones_1.Habitacion {
    constructor(tipo, IDHab, camas, pNoche, spa) {
        super("v", IDHab, camas, pNoche);
        this._spa = false;
        this._spa = spa;
    }
    get spa() {
        return this._spa;
    }
}
exports.HVip = HVip;
