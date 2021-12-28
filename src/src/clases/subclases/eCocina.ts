import { Trabajador } from "../Empleado";

export class ECocina extends Trabajador{
     private _Titulacion:string
     private _NEstrella:number

    constructor(dni:string,salarioBase:number,NEstrella:number,Titulacion:string){
        super(dni,"c",salarioBase)
        this._NEstrella=NEstrella
        this._Titulacion=Titulacion
        
    }
    get Titulacion(){
        return this._Titulacion
    }
    get NEstrella(){
        return this._NEstrella
    }
    calcularSueldo(){
        if(this._NEstrella>0){
            return super.SalarioBase*(1+(0.05*this._NEstrella));
        }else{
            return super.SalarioBase;
        }
        
    }
}