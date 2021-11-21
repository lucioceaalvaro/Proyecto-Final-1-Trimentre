import {Schema, model } from 'mongoose'
// Definimos el Schema
const ClientesSchema = new Schema({
    //caracteristicas del objeto
    _dni: {
        type: String  //Valores "A, "T"...
    },
    _nombre: {
        type: String
    },
    _nTarjeta: {
        type: Number
    },
    
})


export type Iclientes = {
    //los mismos de arriba
    _dni:string |null
    _nombre:string |null
    _nTarjeta:number|null

}
export type tClientes = {
    //los mismos de arriba
    _dni:string 
    _nombre:string 
    _nTarjeta:number 

}


// La colección de la BD (Plural siempre)
export const Clientes = model('Clientes', ClientesSchema)