"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELimpieza = void 0;
const Empleado_1 = require("../Empleado");
class ELimpieza extends Empleado_1.Trabajador {
    constructor(dni, salarioBase, habitaciones) {
        super(dni, "l", salarioBase);
        this._habitaciones = new Array();
        this._habitaciones = habitaciones;
    }
    get get_Habitaciones() {
        return this._habitaciones;
    }
    añadirHabitaciones(habitacion) {
        this._habitaciones.push(habitacion);
    }
    calcularSueldo() {
        let SueldoFinal = super.SalarioBase;
        this._habitaciones.forEach(element => {
            //console.log( "Tipo de Habitacion "+element.tipo)
            switch (element.tipo) {
                case "b":
                    SueldoFinal = SueldoFinal + 3;
                    break;
                case "f":
                    SueldoFinal = SueldoFinal + 5;
                    break;
                case "v":
                    SueldoFinal = SueldoFinal + 7;
                    break;
            }
        });
        return SueldoFinal;
    }
}
exports.ELimpieza = ELimpieza;
