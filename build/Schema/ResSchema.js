"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservas = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const ReservaSchema = new mongoose_1.Schema({
    //caracteristicas del objeto
    _cliente: {
        type: String //Valores "A, "T"...
    },
    _nDias: {
        type: Number
    },
    _habitacion: {
        type: String
    },
    _nPersonas: {
        type: Number
    },
    _Precio: {
        type: Number
    }
});
// La colección de la BD (Plural siempre)
exports.Reservas = (0, mongoose_1.model)('Reservas', ReservaSchema);
