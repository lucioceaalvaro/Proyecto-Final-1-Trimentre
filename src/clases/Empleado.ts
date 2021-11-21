export class Trabajador {
    private _dni:string
    private _tipo:string
    private _SalarioBase:number

    constructor(dni:string,tipo:string,SalarioBase:number){
        this._dni=dni,
        this._tipo=tipo,
        this._SalarioBase=SalarioBase
    }

    get dni(){
        return this._dni;
    }
    get tipo(){
        return this._tipo;
    }
    get SalarioBase(){
        return this._SalarioBase;
    }
    set SalarioBase(patata:number){
        this.SalarioBase=patata
    }
    calcularSueldo(){
        return this._SalarioBase;
    }
}