"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERecepcion = void 0;
const Empleado_1 = require("../Empleado");
class ERecepcion extends Empleado_1.Trabajador {
    constructor(dni, salarioBase, nocturnidad) {
        super(dni, "r", salarioBase);
        this._nocturnidad = nocturnidad;
    }
    get nocturnidad() {
        return this._nocturnidad;
    }
    calcularSueldo() {
        if (this.nocturnidad == true) {
            return super.SalarioBase * 1.15;
        }
        else {
            return super.SalarioBase;
        }
    }
}
exports.ERecepcion = ERecepcion;
