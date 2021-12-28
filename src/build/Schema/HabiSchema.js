"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitaciones = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const HabitacionSchema = new mongoose_1.Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String //Valores "A, "T"...
    },
    _IdHab: {
        type: String
    },
    _Camas: {
        type: Number
    },
    _PNoche: {
        type: Number
    },
    _estado: {
        type: Boolean
    },
    _desayuno: {
        type: Boolean
    },
    _supletoria: {
        type: Boolean
    },
    _spa: {
        type: Boolean
    }
});
// La colección de la BD (Plural siempre)
exports.Habitaciones = (0, mongoose_1.model)('Habitaciones', HabitacionSchema);
