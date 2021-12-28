import { Habitacion } from "../habitaciones";

export class HBasica extends Habitacion{
    
    private _desayuno:boolean=false

    
    
    
    constructor(tipo:string,IDHab:string,camas:number,pNoche:number,desayuno:boolean){
        super("b",IDHab,camas,pNoche)
        this._desayuno=desayuno
        
    }
    
    get desayuno(){
        return this._desayuno
    }
     
       
}