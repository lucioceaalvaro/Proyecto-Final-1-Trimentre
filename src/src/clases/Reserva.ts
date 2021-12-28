import { Cliente } from "./Cliente"
import { Habitacion } from "./habitaciones"

export class Reserva {
    private _cliente:string
    private _nDias:number
    private _habitacion:string
    private _nPersonas:number
    private _Precio:number=0
    constructor(cliente:string,nDias:number,habitacion:string,nPersonas:number){
        this._cliente=cliente
        this._nDias=nDias
        this._habitacion=habitacion
        this._nPersonas=nPersonas
    }

    get cliente(){
        return this._cliente
    }
    get nDias(){
        return this._nDias
    }
    get habitacion(){
        return this._habitacion
    }
    get nPersonas(){
        return this._nPersonas
    }
    get Precio(){
        return this._Precio
    }

    set cliente(cliente:string){
        this._cliente=cliente
    }
    set nDias(nDias:number){
        this._nDias=nDias
    }
    set habitacion(habitacion:string){
        this._habitacion=habitacion
    }
    set nPersonas(nPersonas:number){
        this._nPersonas=nPersonas
    }
    PrecioFinal(){
        //b=200 f 250 v 300
        /*switch (this.habitacion.tipo.toLowerCase()) {
            case "b":  
                  this._Precio=200*this._nDias    
                break;
             case "f":
                  this._Precio=250*this._nDias;
                break;
             case "v":
                  this._Precio=300*this._nDias;
                break;
        }*/
         
    }


}