"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const ClientesSchema = new mongoose_1.Schema({
    //caracteristicas del objeto
    _dni: {
        type: String //Valores "A, "T"...
    },
    _nombre: {
        type: String
    },
    _nTarjeta: {
        type: Number
    },
});
// La colección de la BD (Plural siempre)
exports.Clientes = (0, mongoose_1.model)('Clientes', ClientesSchema);
