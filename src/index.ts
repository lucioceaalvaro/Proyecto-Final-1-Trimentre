import { opcmenu } from './vistas/menu'
import { leerTeclado } from './vistas/lecturaTeclado'
import { opcmenuEm } from './vistas/menuEm'
import { db } from './database/database';
import { Habitacion } from './clases/habitaciones'
import { Trabajador } from './clases/Empleado'
import { BusquedaReserva, salvar,Inicio, DPrueba, EliminarCliente } from './funciones'
import { opcmenuRe } from './vistas/menuRe'
import { HBasica } from './clases/subclases/hBasica'
import { HFamiliar } from './clases/subclases/hFamiliar'
import { HVip } from './clases/subclases/hVip'
import { Global } from './clases/Global'
import { ECocina } from './clases/subclases/eCocina'
import { ERecepcion, } from './clases/subclases/eRecepcion'
import { ELimpieza } from './clases/subclases/eLimpieza'
import { Cliente } from './clases/Cliente'
import { Reserva } from './clases/Reserva'
import { Reservas, tReservas } from './Schema/ResSchema';
import { Habitaciones,tHabitaciones } from './Schema/HabiSchema'
import { Console } from 'console'
import {Empleado, tEmpleado} from './Schema/EmpSchema'


const hotel =async()=>{
let Nhabitacion2:Habitacion
let Empleado2:Trabajador
let elecM:number=await opcmenu()
let cont=0
let BoolDesayuno:boolean
let BoolSupletoria:boolean
let BoolSpa:boolean
let BoolNoctur:boolean

switch (elecM){
    case 1:
        //Empresa
        let elecEm:number= await opcmenuEm()
        console.log("############################################################\n")
        console.log("################# PLATAFORMA DE EMPRESA #################\n")
        console.log("############################################################\n")

            switch (elecEm){
                case 1:
                    //Crear Habitaciones
                     let tipo= await leerTeclado('Tipo de Habitación')
                     let IDHab=await leerTeclado('Identificador de Habitación')
                     let camas=parseInt(await leerTeclado('Numero de Camas'))
                     let pNoche=parseInt(await leerTeclado('Precio por noche'))
                     if(tipo=="b"){
                        let Desayuno=await leerTeclado('Desayuno')
                        if (Desayuno=="si"){
                             BoolDesayuno=true
                        }else{
                             BoolDesayuno=false
                        }
                        Nhabitacion2= new HBasica(tipo,IDHab,camas,pNoche,BoolDesayuno);
                        Global.habitaciones.push(Nhabitacion2)
                     }else if(tipo=="f"){
                         let Supletoria=await leerTeclado('Supletoria')
                         if (Supletoria=="si")
                         {
                                BoolSupletoria=true
                            }else{
                                BoolSupletoria=false
                            }
                       Nhabitacion2= new HFamiliar(tipo,IDHab,camas,pNoche,BoolSupletoria);
                       Global.habitaciones.push(Nhabitacion2)
                     }else if(tipo=="v"){
                            let Spa=await leerTeclado('Spa')
                            if (Spa=="si")
                            {
                                BoolSpa=true
                            }else{
                                BoolSpa=false
                            }
                        Nhabitacion2= new HVip(tipo,IDHab,camas,pNoche,BoolSpa);
                        Global.habitaciones.push(Nhabitacion2)
                     } 

                      let a= await leerTeclado('¿Quieres ver las habitaciones creadas? s o n')
                      if (a=="s") {
                          Global.habitaciones.forEach(element => {
                              console.log(element)
                          });
                      }
                    hotel()
                     break
                case 2:
                    //Crear Empleado 
                    let tipoE= await leerTeclado('Tipo de Empleado')
                    let DniEmp=await leerTeclado('Dni Empleado')
                    let SalarioBase=parseInt(await leerTeclado('Salario Base'))
                    
                        if(tipoE=="Ec"){
                        
                            let NEstrella=parseInt( await leerTeclado('Numero de Estrellas Michelin'))
                            let Titulacion=await leerTeclado('Titulo de competencia')
                            
                            Empleado2= new ECocina(DniEmp,SalarioBase,NEstrella,Titulacion);
                            Global.trabajadores.push(Empleado2)
                        }else if(tipoE=="Er"){
                        
                            let Snocturnidad=await leerTeclado('Nocturnidad')
                            if (Snocturnidad=="si")
                            {
                                BoolNoctur=true
                            }else{
                                BoolNoctur=false
                            }
                            
                            
                            Empleado2= new ERecepcion(DniEmp,SalarioBase,BoolNoctur);
                            Global.trabajadores.push(Empleado2)

                        }else if(tipoE=="El"){
                           Global.habitaciones.forEach(element => {
                               console.log(element)
                           });
                           let habitacionesLimp=await leerTeclado('Numero de habitaciones limpiadas separados por ","')
                           let NHLimp:Array<Habitacion>=new Array<Habitacion>()

                           habitacionesLimp.toLowerCase().trim().split(",").forEach(element => {
                                Global.habitaciones.forEach(h => {
                                    if(h.IDHab==element){
                                        NHLimp.push(h)
                                        }
                                    });
                            })
                            Empleado2= new ELimpieza(DniEmp,SalarioBase,NHLimp);
                            
                            Global.trabajadores.push(Empleado2)
                     

                            let c= await leerTeclado('¿Quieres ver las habitaciones asignadas? s o n')
                            if (c=="s") {
                                Global.trabajadores.forEach(element => {
                                    console.log(element)
                                });
                            }   
                        }
                        hotel()
                    break
                case 3:
                    //Crear Cliente 
                    let AltaCliente:Cliente
                    let dniCl= await leerTeclado('Dni del Cliente')
                    let nombreCl= await leerTeclado('Nombre del Cliente')
                    let nTarheta=parseInt(await leerTeclado('Numero de Tarjeta de Credito'))
                    AltaCliente=new Cliente(dniCl,nombreCl,nTarheta)
                    Global.clientes.push(AltaCliente)
                    hotel()
                    break
                case 4:
                    console.log("###################################")
                    console.log("1.-Listar Clientes")
                    console.log("2.-Listar Habitaciones")
                    console.log("3.-Listar Empleados")
                    console.log("4.-Listar Reservas")
                    let Selec=parseInt(await leerTeclado("Seleccion"))
                    switch(Selec){
                        case 1:
                        //Listar Clientes 
                        
                        Global.clientes.forEach(element => {
                            console.log(element.nombre,element.dni)
                        });
                        break
                        case 2:
                        //Listar Habitaciones
                        Global.habitaciones.forEach(element => {
                            console.log(element.IDHab,element.estado)
                        });
                        break
                        case 3:
                        //Listar Empleados
                        Global.trabajadores.forEach(element => {
                            console.log(element.dni,element.tipo)
                        });
                        break
                        case 4:
                        //Listar Reservas
                        Global.reservas.forEach(element => {
                            console.log(element)
                        })
                        break
                    }
                    hotel()
                    break
                case 5:
                        //Calcular Sueldo
                        //Maximo
                        let max=0
                        let max_id=""
                        let min_id=""

                        let min=Global.trabajadores[0].calcularSueldo()
                        let suma=0,n=0,media
  
                        Global.trabajadores.forEach(element => {
                            if(element.calcularSueldo()>max) {
                                max=element.calcularSueldo()
                                max_id=element.dni
                            }
                            if(element.calcularSueldo()<min) {
                                min=element.calcularSueldo()
                                min_id=element.dni
                            }
                            
                        })

                        Global.trabajadores.forEach(element => {
                           suma+=element.calcularSueldo()
                           n++

                        });

                        media=suma/n

                        let informe:string=("INFORME DE LOS SUELDOS\n###################################\n\n\tSUELDO MAXIMO:\n\t\t DNI: "+max_id+
                        "\n\t\tSUELDO: "+max+"\n\n################################"+"\n\n\tSUELDO MINIMO:\n\t\t DNI: "+min_id+
                        "\n\t\tSUELDO: "+min+"\n\n################################"+"\n\n\tSUELDO MEDIO:\n\t\t : "+media)

                        console.log(informe)
                        hotel()
                break
                case 6:
                        await EliminarCliente()
                        hotel()
                break
                case 0:
                    
                break
            }
        break
    case 2:
        //Proceso de Reserva
        console.log("############################################################\n")
        console.log("################# PLATAFORMA DE RESERVA #################\n")
        console.log("############################################################\n")

        let elecRe:number= await opcmenuRe()
        switch (elecRe){
            case 1:
                //Guardar datos (Datos de Prueba)
                        salvar()
                        hotel()
                 break
            case 2:
                //Consultas
                        BusquedaReserva()
                        hotel()
                break
            case 3:
                //Crear Hacer Reserva
                
                
                        let Reserva2:Reserva
                        Global.clientes.forEach(element => {
                            console.log("Dni Clientes :"+element.dni+"\n");
                            
                        });
                        
                        
                        Global.habitaciones.forEach(element => {
                            if(element.estado==false){
                                console.log("Id.Haitaciones Libres :"+element.IDHab);
                            }
                            

                        })
                        let dniCl= await leerTeclado('Dni del Cliente')
                        let IdHab= await leerTeclado('Identificador de la Habitacion')
                        let NDias= parseInt(await leerTeclado('Numero de Dias Hospedados'))
                        let nPersonas= parseInt(await leerTeclado("Numero de Personas"))
                    
                        Reserva2= new Reserva (dniCl,NDias,IdHab,nPersonas);

                        Global.habitaciones.forEach((element2,index)=>{
                            if(element2.IDHab==IdHab){                          
                                Global.habitaciones[index].estado=true
                                
                            }

                        })

                        Global.reservas.push(Reserva2)
                        hotel()
                break
            case 4:
                //Calcular Precio Reserva
                
                        await db.conectarBD()
                        
                        //let dReserva:iReservas
                        let DniCl= await leerTeclado(' Dni del Cliente\n ')
                        let tmpdHabitaciones:Habitacion
                        let tmpReservas:Reserva
                        let dHabitacion:tHabitaciones
                        let dReserva:tReservas
                        let query:any = await Reservas.find({_cliente:DniCl})
                        let query2:any = await Habitaciones.find({})
                        let PrecioFinal:number =0,PrecioBasica:number =0,PrecioFamiliares:number =0,PrecioVip:number =0
                        
                        for ( dHabitacion of query2){
                            
                            //El precio varia en base al tipo de Habitacion que sea
                            
                            if(dHabitacion._tipoObjeto==="b"){
                                tmpdHabitaciones=new HBasica (dHabitacion._tipoObjeto, dHabitacion._IdHab,dHabitacion._Camas,dHabitacion._PNoche,dHabitacion._desayuno) 

                                for(dReserva of query){
                                
                                    tmpReservas=new Reserva(dReserva._cliente,dReserva._nDias,dReserva._habitacion,dReserva._nPersonas)
                                    if(DniCl==tmpReservas.cliente){
                                        if(tmpdHabitaciones.IDHab== tmpReservas.habitacion)
                                        {
                                            PrecioBasica=tmpdHabitaciones.pNoche*tmpReservas.nDias
                                            if(dHabitacion._desayuno==true){
                                                PrecioBasica=PrecioBasica*1.25
                                            }
                                            console.log("####################### PRECIO FINAL DE HOSPEDAJE BASICA #######################")
                                            console.log("Precio de Habitacion :"+PrecioBasica+"€\n")
                                        }
                                        
                                    }   
                                    
                                }
                                
                            }else if(dHabitacion._tipoObjeto==="f"){
                                tmpdHabitaciones=new HFamiliar (dHabitacion._tipoObjeto, dHabitacion._IdHab,dHabitacion._Camas,dHabitacion._PNoche,dHabitacion._supletoria) 
                          
                                for(dReserva of query){
                                
                                    tmpReservas=new Reserva(dReserva._cliente,dReserva._nDias,dReserva._habitacion,dReserva._nPersonas)
                                    if(DniCl==tmpReservas.cliente){
                                        if(tmpdHabitaciones.IDHab== tmpReservas.habitacion)
                                        {
                                            PrecioFamiliares=tmpdHabitaciones.pNoche*tmpReservas.nDias


                                            if(dHabitacion._supletoria==true){
                                                PrecioFamiliares=PrecioFamiliares*1.15
                                            }
                                            console.log("####################### PRECIO FINAL DE HOSPEDAJE FAMILIAR #######################")
                                            console.log("Precio de Habitacion :"+PrecioFamiliares+"€\n")
                                        
                                        }
                                        
                                    }
                                }
                                
                            }else if(dHabitacion._tipoObjeto=="v"){
                                tmpdHabitaciones=new HVip (dHabitacion._tipoObjeto, dHabitacion._IdHab,dHabitacion._Camas,dHabitacion._PNoche,dHabitacion._spa) 
                                for(dReserva of query){
                                
                                    tmpReservas=new Reserva(dReserva._cliente,dReserva._nDias,dReserva._habitacion,dReserva._nPersonas)
                                    // console.log(tmpReservas.habitacion +" = "+ tmpdHabitaciones.IDHab)
                                    if(DniCl==tmpReservas.cliente){
                                        if(tmpdHabitaciones.IDHab== tmpReservas.habitacion)
                                        {
                                            PrecioVip=tmpdHabitaciones.pNoche*tmpReservas.nDias


                                            if(dHabitacion._spa==true){
                                                PrecioVip=PrecioVip*1.35
                                            }
                                            console.log("####################### PRECIO FINAL DE HOSPEDAJE VIP#######################")
                                            console.log("Precio de Habitacion :"+PrecioVip+"€\n")
                                        
                                        }
                                        
                                    }
                                    
                                    
                                }
                                
                            }

                        }
                        PrecioFinal=PrecioBasica+PrecioFamiliares+PrecioVip
                        console.log("Precio Total de la Reserva :"+PrecioFinal+"€")

                        await db.desconectarBD()

                hotel()
                break
            case 5:
                //Volver a asignar una Habitacion Libre
                Global.habitaciones.forEach((element)=>{
                    console.log(element)
                })
                let IDCko= await leerTeclado('Numero de la habitación que queda libre')
                Global.habitaciones.forEach((element,index)=>{
                    if(element.IDHab==IDCko)
                                            
                        Global.habitaciones[index].estado=false
                    }
                
                )
                
                hotel()    
                break

            case 0:
                //salir 
                break
        }     
    
        
        break
    case 3:
        DPrueba()
        hotel()
    break
    case 100:
        let selcbd= await parseInt( await leerTeclado('1.-Para guardar en mongo Atlas --- 2.- Para guardar en local'))

        if(selcbd==1){
            db.cambiarBD(true)
        }else if(selcbd==2){
            db.cambiarBD(false)
        }
        
        hotel()
    break
    
}
}
Inicio()
hotel()