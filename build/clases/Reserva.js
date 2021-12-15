"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
class Reserva {
    constructor(cliente, nDias, habitacion, nPersonas) {
        this._Precio = 0;
        this._cliente = cliente;
        this._nDias = nDias;
        this._habitacion = habitacion;
        this._nPersonas = nPersonas;
    }
    get cliente() {
        return this._cliente;
    }
    get nDias() {
        return this._nDias;
    }
    get habitacion() {
        return this._habitacion;
    }
    get nPersonas() {
        return this._nPersonas;
    }
    get Precio() {
        return this._Precio;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    set nDias(nDias) {
        this._nDias = nDias;
    }
    set habitacion(habitacion) {
        this._habitacion = habitacion;
    }
    set nPersonas(nPersonas) {
        this._nPersonas = nPersonas;
    }
    PrecioFinal() {
        //b=200 f 250 v 300
        /*switch (this.habitacion.tipo.toLowerCase()) {
            case "b":
                  this._Precio=200*this._nDias
                break;
             case "f":
                  this._Precio=250*this._nDias;
                break;
             case "v":
                  this._Precio=300*this._nDias;
                break;
        }*/
    }
}
exports.Reserva = Reserva;
