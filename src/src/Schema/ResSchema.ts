import {Schema, model } from 'mongoose'
import { Habitacion } from '../clases/habitaciones'
import { Cliente } from '../clases/Cliente'
// Definimos el Schema
const ReservaSchema = new Schema({
    //caracteristicas del objeto
    _cliente: {
        type: String  //Valores "A, "T"...
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
})


export type iReservas = {
    //los mismos de arriba
     _cliente:string | null
     _nDias:number | null
     _habitacion:string | null
     _nPersonas:number | null
     _Precio:number | null
}
export type tReservas = {
    //los mismos de arriba
     _cliente:string 
     _nDias:number 
     _habitacion:string 
     _nPersonas:number 
     _Precio:number 
}



// La colección de la BD (Plural siempre)
export const Reservas = model('Reservas', ReservaSchema)