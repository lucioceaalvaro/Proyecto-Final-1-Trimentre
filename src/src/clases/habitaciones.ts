export class Habitacion{

    private _tipo:string;
    private _IDHab:string;
    private _camas:number;
    private _pNoche:number;
    private _estado:boolean=false;

    constructor(tipo:string,IDHab:string,camas:number,pNoche:number){
        this._tipo=tipo,
        this._IDHab=IDHab,
        this._camas=camas,
        this._pNoche=pNoche
        
    }
    get tipo(){
        return this._tipo;
    }
    get IDHab(){
        return this._IDHab;
    }
    get camas(){
        return this._camas;
    }
    get pNoche(){
        return this._pNoche;
    }
    get estado(){
        return this._estado;
    }
    set estado(estado:boolean){
        this._estado=estado
    }
   
}
