"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(dni, nombre, nTarjeta) {
        this._dni = dni;
        this._nombre = nombre;
        this._nTarjeta = nTarjeta;
    }
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get nTarjeta() {
        return this._nTarjeta;
    }
    set dni(patata2) {
        this._dni = patata2;
    }
    set nombre(patata3) {
        this._nombre = patata3;
    }
    set nTarjeta(patata4) {
        this._nTarjeta = patata4;
    }
}
exports.Cliente = Cliente;
