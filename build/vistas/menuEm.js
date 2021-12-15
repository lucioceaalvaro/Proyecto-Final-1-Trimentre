"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcmenuEm = void 0;
const lecturaTeclado_1 = require("../vistas/lecturaTeclado");
const opcmenuEm = () => __awaiter(void 0, void 0, void 0, function* () {
    let opcmenuEm;
    console.log('\n');
    console.log('1.- Crear Habitaciones');
    console.log('2.- Crear Empleados');
    console.log('3.- Crear Clientes');
    console.log('4.- Lista');
    console.log('5.- Calcular Salarios');
    console.log('0.- SALIR');
    opcmenuEm = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('--OPCIÓN--'));
    return opcmenuEm;
});
exports.opcmenuEm = opcmenuEm;
//
