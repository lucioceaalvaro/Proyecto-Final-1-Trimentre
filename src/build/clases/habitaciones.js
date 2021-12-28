"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitacion = void 0;
class Habitacion {
    constructor(tipo, IDHab, camas, pNoche) {
        this._estado = false;
        this._tipo = tipo,
            this._IDHab = IDHab,
            this._camas = camas,
            this._pNoche = pNoche;
    }
    get tipo() {
        return this._tipo;
    }
    get IDHab() {
        return this._IDHab;
    }
    get camas() {
        return this._camas;
    }
    get pNoche() {
        return this._pNoche;
    }
    get estado() {
        return this._estado;
    }
    set estado(estado) {
        this._estado = estado;
    }
}
exports.Habitacion = Habitacion;
