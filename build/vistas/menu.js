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
exports.opcmenu = void 0;
const lecturaTeclado_1 = require("../vistas/lecturaTeclado");
const opcmenu = () => __awaiter(void 0, void 0, void 0, function* () {
    let opcmenu;
    console.log("###################################################\n");
    console.log("############# GESTION DEL HOTEL ##############\n");
    console.log("###################################################\n");
    console.log('\n');
    console.log('1.- Plataforma de la Empresa');
    console.log('2.- Reserva de Habitación');
    console.log('3.- Cargar Datos de Prueba');
    console.log('100.-Cambiar de Base de Datos Atlas');
    console.log('0.- SALIR');
    opcmenu = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('--OPCIÓN--\n'));
    return opcmenu;
});
exports.opcmenu = opcmenu;
