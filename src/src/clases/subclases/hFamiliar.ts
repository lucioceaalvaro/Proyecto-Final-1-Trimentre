import { Habitacion } from "../habitaciones";

export class HFamiliar extends Habitacion{
    
    private _supletoria:boolean=false

    
    
    
    constructor(tipo:string,IDHab:string,camas:number,pNoche:number,supletoria:boolean){
        super("f",IDHab,camas,pNoche)
        this._supletoria=supletoria
        
    }
    
    get supletoria(){
        return this._supletoria
    }
     
       
}