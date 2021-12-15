import mongoose from 'mongoose';
import { Global } from '../clases/Global';

class DataBase {
    
    
    
    private _cadenaConexion: string='mongodb+srv://alvaro:123@cluster0.e2jny.mongodb.net/Hotel?retryWrites=true&w=majority'

    constructor(){

    }
    set cadenaConexion(_cadenaConexion: string){
        this._cadenaConexion = _cadenaConexion
    }

    conectarBD = async () => {
        const promise = new Promise<string>( async (resolve, reject) => {
            await mongoose.connect(this._cadenaConexion, {
            })
            .then( () => resolve(`Conectado a ${this._cadenaConexion}`) )
            .catch( (error) => reject(`Error conectando a ${this._cadenaConexion}: ${error}`) )     
        })
        return promise
    }

    desconectarBD = async () => {
        const promise = new Promise<string>( async (resolve, reject) => {
            await mongoose.disconnect() 
            .then( () => resolve(`Desconectado de ${this._cadenaConexion}`) )
            .catch( (error) => reject(`Error desconectando de ${this._cadenaConexion}: ${error}`) )     
        })
        return promise
    }
    cambiarBD=async(a:boolean)=>{
        if(a==false){
            this._cadenaConexion = 'mongodb://localhost/test'
               
        }else{
               
            this._cadenaConexion ='mongodb+srv://alvaro:1234@cluster0.e2jny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        }
    }
}

export const db = new DataBase()