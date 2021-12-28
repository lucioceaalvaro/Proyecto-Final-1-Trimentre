import {Schema, model } from 'mongoose'
// Definimos el Schema
const HabitacionSchema = new Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
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
    _estado:{
        type: Boolean
    },
    _desayuno:{
        type: Boolean
    },
    _supletoria: {
        type: Boolean
    },
    _spa:{
        type: Boolean
    }
    
})

export type tHabitaciones={
    _tipoObjeto: string 
    _IdHab:string 
    _Camas:number 
    _PNoche:number 
    _estado:boolean 
    _desayuno:boolean 
    _supletoria:boolean
    _spa:boolean 
}

export type IHabitaciones = {
    //los mismos de arriba
    _tipoObjeto: string | null,
    _IdHab:string | null,
    _Camas:number | null,
    _PNoche:number | null,
    _estado:boolean | null
}
export type IHBasicas = {
    //los mismos de arriba
    _tipoObjeto: string | null,
    _IdHab:string | null,
    _Camas:number | null,
    _PNoche:number | null,
    _estado:boolean | null,
    _desayuno:boolean| null
}
export type IHFamiliar = {
    //los mismos de arriba
    _tipoObjeto: string | null,
    _IdHab:string | null,
    _Camas:number | null,
    _PNoche:number | null,
    _estado:boolean |null,
    _supletoria:boolean |null
}
export type IHVip = {
    //los mismos de arriba
    _tipoObjeto: string | null,
    _IdHab:string | null,
    _Camas:number | null,
    _PNoche:number | null,
    _estado:boolean | null,
    _spa:boolean|null
}


// La colección de la BD (Plural siempre)
export const Habitaciones = model('Habitaciones', HabitacionSchema)