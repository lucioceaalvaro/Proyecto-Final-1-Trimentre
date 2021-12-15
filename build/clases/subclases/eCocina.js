"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECocina = void 0;
const Empleado_1 = require("../Empleado");
class ECocina extends Empleado_1.Trabajador {
    constructor(dni, salarioBase, NEstrella, Titulacion) {
        super(dni, "c", salarioBase);
        this._NEstrella = NEstrella;
        this._Titulacion = Titulacion;
    }
    get Titulacion() {
        return this._Titulacion;
    }
    get NEstrella() {
        return this._NEstrella;
    }
    calcularSueldo() {
        if (this._NEstrella > 0) {
            return super.SalarioBase * (1 + (0.05 * this._NEstrella));
        }
        else {
            return super.SalarioBase;
        }
    }
}
exports.ECocina = ECocina;
