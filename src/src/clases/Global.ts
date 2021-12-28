import { Cliente } from './Cliente';
import { Trabajador } from './Empleado';
import { Habitacion } from './habitaciones';
import { Reserva } from './Reserva';

export class Global {
    
    public static trabajadores: Array<Trabajador> = new Array<Trabajador>();
    public static habitaciones: Array<Habitacion> = new Array<Habitacion>();
    public static clientes: Array<Cliente> = new Array<Cliente>();
    public static reservas: Array<Reserva> = new Array<Reserva>();
    public static BDatos: Boolean=false;
       
}