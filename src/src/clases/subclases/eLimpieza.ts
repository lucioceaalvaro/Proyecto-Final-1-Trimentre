import { Trabajador } from "../Empleado";
import { Global } from "../Global";
import { Habitacion } from "../habitaciones";

export class ELimpieza extends Trabajador{
        
        private _habitaciones:Array<Habitacion>=new Array<Habitacion>();

        constructor(dni:string, salarioBase:number, habitaciones: Array<Habitacion>){
            super(dni,"l",salarioBase)
            this._habitaciones = habitaciones            
        }

        get get_Habitaciones(){
            return this._habitaciones
        }
        añadirHabitaciones(habitacion:Habitacion){
            this._habitaciones.push(habitacion)
        }

        calcularSueldo() {
            let SueldoFinal=super.SalarioBase
            this._habitaciones.forEach(element => {
                //console.log( "Tipo de Habitacion "+element.tipo)
               switch (element.tipo) {
                   
                    case "b":  
                    SueldoFinal=SueldoFinal+3;    
                       break;
                    case "f":
                        SueldoFinal=SueldoFinal+5;
                       break;
                    case "v":
                        SueldoFinal=SueldoFinal+7;
                       break;
               } 
            });
            return SueldoFinal;
        }
}