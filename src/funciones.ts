import { Trabajador } from './clases/Empleado';
import { Habitacion } from './clases/habitaciones';
import { ECocina } from './clases/subclases/eCocina';
import { ELimpieza } from './clases/subclases/eLimpieza';
import { ERecepcion } from './clases/subclases/eRecepcion';
import { db } from './database/database';
import { IHBasicas, IHFamiliar, IHVip, tHabitaciones } from './Schema/HabiSchema';
import { Empleado, iCocina, iEmpleado, iLimpieza, iRecepción,tEmpleado } from './Schema/EmpSchema';
import { HBasica } from './clases/subclases/hBasica'
import { HFamiliar } from './clases/subclases/hFamiliar';
import { iReservas } from './Schema/ResSchema';
import { HVip } from './clases/subclases/hVip';
import { IHabitaciones, Habitaciones } from './Schema/HabiSchema'
import { Cliente } from './clases/Cliente';
import { Reserva } from './clases/Reserva';
import { Reservas,tReservas } from './Schema/ResSchema';
import { Clientes, Iclientes,tClientes } from './Schema/CliSchema';
import { leerTeclado } from './vistas/lecturaTeclado'
import { Global } from './clases/Global';
import exp from 'constants';




export let DPrueba = async()=>{
  Global.trabajadores.push(new ECocina("2", 2000, 2, "fpm"))
  Global.trabajadores.push(new ERecepcion("1", 2000, true))
  Global.trabajadores.push(new ELimpieza("3", 2000,[]));
  
 

  //let habitaciones: Array<Habitacion> = new Array<Habitacion>();
  Global.habitaciones.push(new HBasica("b", "1", 3,40, false))
  Global.habitaciones.push( new HFamiliar("f", "2", 3, 120, true))
  Global.habitaciones.push( new HVip("v", "3", 3, 200, true))

  //let clientes: Array<Cliente> = new Array<Cliente>();
  Global.clientes.push(new Cliente("1", "alvaro", 1234))

  //let reservas: Array<Reserva> = new Array<Reserva>();
  Global.reservas.push(new Reserva("1",4,"1",4,))

  await db.conectarBD()
  await Empleado.deleteMany({})
  await Habitaciones.deleteMany({})
  await Clientes.deleteMany({})
  await Reservas.deleteMany({})
  await db.desconectarBD()
}
export let salvar = async () => {
  
  await db.conectarBD()
  await Empleado.deleteMany({})
  await Habitaciones.deleteMany({})
  await Clientes.deleteMany({})
  await Reservas.deleteMany({})
  await db.desconectarBD()
  
  

  // objeto schema
  
  let dShemaEmp: iEmpleado =
  {
    _tipoObjeto: null,
    _dni: null,
    _salariosBase: null,

  }
  let dShemaECo: iCocina =
  {
    _tipoObjeto: null,
    _dni: null,
    _salariosBase: null,
    _Titulacion: null,
    _NEstrella: null
  }
  let dShemaELi: iLimpieza =
  {
    _tipoObjeto: null,
    _dni: null,
    _salariosBase: null,
    _habitaciones: null
  }
  let dShemaERe: iRecepción =
  {
    _tipoObjeto: null,
    _dni: null,
    _salariosBase: null, 
    _Nocturnidad: null
  }
  let dShemaHab: IHabitaciones =
  {
    _IdHab: null,
    _estado: null,
    _Camas: null,
    _PNoche: null,
    _tipoObjeto: null
  }
  let dShemaHBasica: IHBasicas =
  {
    _IdHab: null,
    _estado: null,
    _Camas: null,
    _PNoche: null,
    _tipoObjeto: null,
    _desayuno: null
  }
  let dShemaHFamiliar: IHFamiliar =
  {
    _IdHab: null,
    _estado: null,
    _Camas: null,
    _PNoche: null ,
    _tipoObjeto: null,
    _supletoria: null
  }
  let dShemaHVip: IHVip =
  {
    _IdHab: null,
    _estado: null,
    _Camas: null,
    _PNoche: null,
    _tipoObjeto: null,
    _spa: null
  }
  let dShemaCli: Iclientes = {
    _dni: null,
    _nombre: null,
    _nTarjeta: null
  }
  let dShemaReserva: iReservas =
  {
    _cliente: null,
    _habitacion: null,
    _nDias: null,
    _nPersonas: null,
    _Precio: null
  }




  // documento schema de tipo 
  ////////////////////////////     
  let ESchema: any
  let HSchema: any
  let RSchema: any
  let CSchema: any



  await db.conectarBD()
  


  //Empleados
  for (let p of Global.trabajadores) {
    dShemaECo._dni = dShemaELi._dni = dShemaERe._dni = p.dni
    dShemaECo._tipoObjeto = dShemaELi._tipoObjeto = dShemaERe._tipoObjeto = p.tipo
    dShemaECo._salariosBase = dShemaELi._salariosBase = dShemaERe._salariosBase = p.SalarioBase


    if (p instanceof ECocina) {
      dShemaECo._tipoObjeto = "Ec"
      dShemaECo._Titulacion = p.Titulacion
      dShemaECo._NEstrella = p.NEstrella

      ESchema = new Empleado(dShemaECo)

    } else if (p instanceof ELimpieza) {
      dShemaELi._tipoObjeto = "El"
      dShemaELi._habitaciones = p.get_Habitaciones

      ESchema = new Empleado(dShemaELi)
    } else if (p instanceof ERecepcion) {
      dShemaERe._tipoObjeto = "Er"
      dShemaERe._Nocturnidad = p.nocturnidad

      ESchema = new Empleado(dShemaERe)
    }
    await ESchema.save()
  }

  //////Habitaciones
  for (let a of Global.habitaciones) {
    // valores comunes ->
    dShemaHBasica._IdHab = dShemaHFamiliar._IdHab = dShemaHVip._IdHab = a.IDHab
    dShemaHBasica._tipoObjeto = dShemaHFamiliar._tipoObjeto = dShemaHVip._tipoObjeto = a.tipo
    dShemaHBasica._estado = dShemaHFamiliar._estado = dShemaHVip._estado = a.estado
    dShemaHBasica._Camas = dShemaHFamiliar._Camas = dShemaHVip._Camas = a.camas
    dShemaHBasica._PNoche=dShemaHFamiliar._PNoche = dShemaHVip._PNoche=a.pNoche



    if (a instanceof HBasica) {
      dShemaHBasica._tipoObjeto = "b"
      dShemaHBasica._desayuno = a.desayuno


      HSchema = new Habitaciones(dShemaHBasica)

    } else if (a instanceof HFamiliar) {
      dShemaHFamiliar._tipoObjeto = "f"
      dShemaHFamiliar._supletoria = a.supletoria


      HSchema = new Habitaciones(dShemaHFamiliar)
    } else if (a instanceof HVip) {
      dShemaHVip._tipoObjeto = "v"
      dShemaHVip._spa = a.spa

      HSchema = new Habitaciones(dShemaHVip)
    }
    await HSchema.save()



  }

  //////Clientes
  for (let c of Global.clientes) {
    dShemaCli._dni = c.dni
    dShemaCli._nombre = c.nombre
    dShemaCli._nTarjeta = c.nTarjeta
    CSchema = new Clientes(dShemaCli)
    await CSchema.save()
  }
  
  /////Reservas
  for (let b of Global.reservas) {
    dShemaReserva._cliente = b.cliente
    dShemaReserva._habitacion = b.habitacion
    dShemaReserva._nDias = b.nDias
    dShemaReserva._nPersonas = b.nPersonas
    dShemaReserva._Precio = b.Precio

    RSchema = new Reservas(dShemaReserva)
    await RSchema.save()
  }
  
  await db.desconectarBD()
}
export let BusquedaReserva=async()=>{
  await db.conectarBD()
  let dCliente:Iclientes
  let dShemaReserva:iReservas
  let Cdni= await leerTeclado('Dni Cliente')
  let query: any =  await Clientes.find({_dni:Cdni})
  let query2:any = await Reservas.find({})
  for (dCliente of query){
      for(dShemaReserva of query2){
        if(dCliente._dni==dShemaReserva._cliente)
        {
          console.log("Habitacion Nº"+dShemaReserva)
        }
      }
    
  }
  await db.desconectarBD()
}
export let Inicio=async()=>{
  ////HABITACIONES
  await db.conectarBD()
  await Empleado.deleteMany({})
  await Habitaciones.deleteMany({})
  await Clientes.deleteMany({})
  await Reservas.deleteMany({})
  await db.desconectarBD()
  await db.conectarBD()

  let tmpdHabitaciones:Habitacion
  let dHabitacion:tHabitaciones
  let query:any = await Habitaciones.find({})
  for(dHabitacion of query){
      
    if(dHabitacion._tipoObjeto=="b"){
      tmpdHabitaciones=new HBasica (dHabitacion._tipoObjeto, dHabitacion._IdHab,dHabitacion._Camas,dHabitacion._PNoche,dHabitacion._desayuno) 

      Global.habitaciones.push(tmpdHabitaciones)
    }else if(dHabitacion._tipoObjeto=="f"){
      tmpdHabitaciones=new HFamiliar (dHabitacion._tipoObjeto, dHabitacion._IdHab,dHabitacion._Camas,dHabitacion._PNoche,dHabitacion._supletoria) 

      Global.habitaciones.push(tmpdHabitaciones)
    }else if(dHabitacion._tipoObjeto=="v"){
      tmpdHabitaciones=new HVip (dHabitacion._tipoObjeto, dHabitacion._IdHab,dHabitacion._Camas,dHabitacion._PNoche,dHabitacion._spa) 

      Global.habitaciones.push(tmpdHabitaciones)
    }
    

  }
  /*Global.habitaciones.forEach(element=>{
    console.log(element)
  })*/ 
  await db.desconectarBD()
///////EMPLEADOS
  
  await db.conectarBD()
  let tmpEmpleado:Trabajador 
  let dEmpleado:tEmpleado
  let query2:any = await Empleado.find({})
  for( dEmpleado of query2){
      
      if(dEmpleado._tipoObjeto=="Ec"){
      tmpEmpleado=new ECocina (dEmpleado._dni,dEmpleado._salariosBase,dEmpleado._NEstrella,dEmpleado._Titulacion) 
      
      Global.trabajadores.push(tmpEmpleado)

      }else if(dEmpleado._tipoObjeto=="Er"){
        tmpEmpleado=new ERecepcion (dEmpleado._dni,dEmpleado._salariosBase,dEmpleado._Nocturnidad)

      Global.trabajadores.push(tmpEmpleado)
      }else if(dEmpleado._tipoObjeto=="Ev"){
        tmpEmpleado=new ELimpieza (dEmpleado._dni,dEmpleado._salariosBase,dEmpleado._habitaciones)

        Global.trabajadores.push(tmpEmpleado)
      }
  

  }
  await db.desconectarBD()
  /*Global.trabajadores.forEach(element=>{
      console.log(element)
  })
  */
 ///Clientes
 await db.conectarBD()
  let tmpCliente:Cliente
  let dCliente:tClientes
  let query3:any = await Clientes.find({})
  for( dCliente of query3){
      
      
      tmpCliente=new Cliente (dCliente._dni, dCliente._nombre,dCliente._nTarjeta) 
      
      Global.clientes.push(tmpCliente)
  }
  await db.desconectarBD()

  ///Reservas
  await db.conectarBD()
  let tmpReserva:Reserva
  let dReserva:tReservas
  let query4:any = await Reservas.find({})
  for( dReserva of query4){
      
      
      tmpReserva=new Reserva (dReserva._cliente, dReserva._nDias,dReserva._habitacion,dReserva._nPersonas) 
      
      Global.reservas.push(tmpReserva)
  }
  await db.desconectarBD()
}
export let EliminarCliente = async ()=>{
  let dniCl= await leerTeclado("Dni del Cliente a eliminar")

  await db.conectarBD()
  let query:any =await Clientes.findOneAndDelete({_dni:dniCl})
    .then(()=> console.log("Elimido Correctamente"))
    .catch((fallo:any)=>console.log("Fallo: "+fallo))
  await db.desconectarBD()
  
  Global.clientes.forEach((element,index)=>{
    if (element.dni==dniCl){
      
      Global.clientes.splice (index,1)
    }
  });
}




