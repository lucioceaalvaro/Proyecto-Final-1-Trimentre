import { Habitacion } from "../habitaciones";

export class HVip extends Habitacion{
    
    private _spa:boolean=false

    
    
    
    constructor(tipo:string,IDHab:string,camas:number,pNoche:number,spa:boolean){
        super("v",IDHab,camas,pNoche)
        this._spa=spa
        
    }
    
    get spa(){
        return this._spa
    }
     
       
}