import { type } from "os";
import { Trabajador } from "../Empleado";


export class ERecepcion extends Trabajador{
    
    private _nocturnidad:boolean
    
    constructor(dni:string,salarioBase:number,nocturnidad:boolean){
        super(dni,"r",salarioBase)
        this._nocturnidad=nocturnidad
    }
    get nocturnidad(){
        return this._nocturnidad;
    }
    
    calcularSueldo(){
        if(this.nocturnidad==true){
            return super.SalarioBase*1.15;
        }else{
            return super.SalarioBase;
        }
        
    }
}
