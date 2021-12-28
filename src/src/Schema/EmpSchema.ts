import {Schema, model } from 'mongoose'
import { type } from 'os'
import {Trabajador} from '../clases/Empleado'
import { Habitacion } from '../clases/habitaciones'
import { } from '../clases/subclases/eRecepcion'

// Definimos el Schema
const EmpleadosSchema = new Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
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
    _habitaciones:{
        type: Array,
        default:[]
    },
    _Nocturnidad:{
        type:Boolean
    }
    
})


export type iEmpleado = {
    //los mismos de arriba
    _tipoObjeto: string | null,
    _dni: string | null,
    _salariosBase: number | null
}
export type tEmpleado={
    _tipoObjeto: string ,
    _dni: string ,
    _salariosBase: number 
    _Titulacion: string ,
    _NEstrella: number, 
    _habitaciones: Habitacion[] ,
    _Nocturnidad:boolean

}
export type iCocina={
    //caracteristicas tipo
    _tipoObjeto: string | null,
    _dni: string | null,
    _salariosBase: number | null,
    _Titulacion: string | null,
    _NEstrella: number | null
}
export type iLimpieza={
    _dni: string | null,
    _salariosBase: number | null,
    _tipoObjeto: string | null,
    _habitaciones: Habitacion[] | null

}
export type iRecepción={
    _dni: string | null,
    _salariosBase: number | null,
    _tipoObjeto: string | null,
    _Nocturnidad:boolean | null
}

// La colección de la BD (Plural siempre)
export const Empleado = model('Empleados', EmpleadosSchema)