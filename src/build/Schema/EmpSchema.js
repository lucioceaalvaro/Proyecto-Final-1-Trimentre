"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const EmpleadosSchema = new mongoose_1.Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String //Valores "A, "T"...
    },
    _dni: {
        type: Number
    },
    _salariosBase: {
        type: Number
    },
    _Titulacion: {
        type: String
    },
    _NEstrella: {
        type: Number
    },
    _habitaciones: {
        type: Array,
        default: []
    },
    _Nocturnidad: {
        type: Boolean
    }
});
// La colección de la BD (Plural siempre)
exports.Empleado = (0, mongoose_1.model)('Empleados', EmpleadosSchema);
