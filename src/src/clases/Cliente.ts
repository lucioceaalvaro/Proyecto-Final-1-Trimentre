export class Cliente{
    private _dni:string
    private _nombre:string
    private _nTarjeta:number

    constructor(dni:string,nombre:string,nTarjeta:number){
        this._dni=dni
        this._nombre=nombre
        this._nTarjeta=nTarjeta
    }

    get dni(){
        return this._dni
    }
    get nombre(){
        return this._nombre
    }
    get nTarjeta(){
        return this._nTarjeta
    }
    set dni(patata2:string){
        this._dni=patata2
    }
    set nombre(patata3:string){
        this._nombre=patata3
    }
    set nTarjeta(patata4:number){
        this._nTarjeta=patata4
    }
}