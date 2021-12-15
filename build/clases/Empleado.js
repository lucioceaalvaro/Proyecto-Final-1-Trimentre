"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajador = void 0;
class Trabajador {
    constructor(dni, tipo, SalarioBase) {
        this._dni = dni,
            this._tipo = tipo,
            this._SalarioBase = SalarioBase;
    }
    get dni() {
        return this._dni;
    }
    get tipo() {
        return this._tipo;
    }
    get SalarioBase() {
        return this._SalarioBase;
    }
    set SalarioBase(patata) {
        this.SalarioBase = patata;
    }
    calcularSueldo() {
        return this._SalarioBase;
    }
}
exports.Trabajador = Trabajador;
