import {Request, Response, Router } from 'express'

import { Habitaciones,tHabitaciones } from '../Schema/HabiSchema'
import {Empleado, tEmpleado} from '../Schema/EmpSchema'
import { Reservas, tReservas } from '../Schema/ResSchema';
import { Clientes, Iclientes } from '../Schema/CliSchema';
import { db } from '../database/database'
import { Cliente } from '../clases/Cliente';

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    private getHabitaciones = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Habitaciones.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private getClientes = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Clientes.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private getEmpleados = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Empleado.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private getReservas = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Reservas.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private postHabitacion = async (req: Request, res: Response) => {
        const { tipoObjeto,idHab,camas,pnoche,estado,desayuno,supletonia,spa } = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _IdHab:idHab,
            _Camas:camas,
            _PNoche:pnoche,
            _estado:estado,
            _desayuno:desayuno,
            _supletonia:supletonia,
            _spa:spa
        }
        const oSchema = new Habitaciones(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postEmpleado = async (req: Request, res: Response) => {
        const {tipo,dni,salarioBase,titulacion,Nestrellas,habitaciones,nocturnidad} = req.body
        await db.conectarBD()
        const dSchema={
           _tipoObjeto:tipo,
           _dni:dni,
           _salarioBase:salarioBase,
           _Titulacion:titulacion,
           _NEstrella:Nestrellas,
           _habitationes:habitaciones,
           _Nocturnidad:nocturnidad,
        }
        const oSchema = new Empleado(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postCliente = async (req: Request, res: Response) => {
        const {dni,nombre,nTarjeta} = req.body
        await db.conectarBD()
        const dSchema={
            _dni: dni,
            _nombre: nombre,
            nTarjeta: nTarjeta
        }
        const oSchema = new Clientes(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postReservas = async (req: Request, res: Response) => {
        const {clientes,nDias,habitacion,nPersonas,precio} = req.body
        await db.conectarBD()
        const dSchema={
            _clientes: clientes,
            _nDias: nDias,
            _habitacion:habitacion,
            _nPersonas: nPersonas,
            _precio: precio   
        }
        const oSchema = new Reservas(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    // private getAuto = async (req: Request, res: Response) => {
    //     const valor = req.params.valor
    //     await db.conectarBD()
    //     .then( async (mensaje) => {
    //         console.log(mensaje)
    //         const query  = await Autos.aggregate([
    //             {
    //               $match:{"_matricula" : valor}
      
    //             }])
    //         res.json(query)
    //     })
    //     .catch((mensaje) => {
    //         res.send(mensaje)
    //     })

    // }

    // private crearAuto = async (req: Request, res: Response) => {// probar meter el auto con el save
    //     const auto = new Autos(req.body)
    //     console.log(auto)
    //     await db.conectarBD()
    //     .then( async (mensaje) => {
    //         //let pSchema : any

            
    //         //pSchema.save() De aqui para abajo esta bien*/
    //         /*pSchema = new Autos({
    //             _tipoObjeto: auto._tipoObjeto,
    //             _precioBase: auto._precioBase,
    //             _potenciaMotor: auto._potenciaMotor,
    //             _traccion: auto._traccion,
    //             _matricula: auto._matricula
    //         })*/

    //         console.log(mensaje)
    //         //await pSchema.save()
    //         await auto.save()
    //         .then ((doc:any) => res.send("documento salvado "+doc))
    //         .catch((err:any) => res.send(err))
    //     })

    //     .catch((mensaje) => {
    //         res.send(mensaje)
    //     })

    //     db.desconectarBD()
    // }

    // private modificarAuto = async (req: Request, res: Response) => {
    //     //const valor = req.params.valor
    //     //console.log(valor)
    //     //const modificar = req.params.modificar
    //     const auto = new Autos(req.body)
    //     console.log(auto)
    //     console.log(auto)
    //     await db.conectarBD()
    //     .then( async (mensaje) => {
    //         console.log(mensaje)
    //         const query  = await Autos.findOneAndUpdate(
    //             {_matricula: auto._matricula},
    //             {
    //                 _tipoObjeto: auto._tipoObjeto,
    //                 _precioBase: auto._precioBase,
    //                 _potenciaMotor: auto._potenciaMotor,
    //                 _traccion: auto._traccion, 
    //             },
    //             {new: true}
    //         )
    //         res.json(query)
    //     })
    //     .catch((mensaje) => {
    //         res.send(mensaje)
    //     })

    //     db.desconectarBD()
    // }

    // private modificarAuto2 = async (req: Request, res: Response) => {

    //     await db.conectarBD()
    //     .then( async (mensaje) => {
    //         console.log(mensaje)
    //         const matriculaP = req.params.matriculaP
    //         const cambioP = req.params.cambioP
    //         const query  = await Autos.findOneAndUpdate(
    //             {_matricula: matriculaP},
    //             {
    //                 _potenciaMotor: cambioP
    //             },
    //             {new: true}
    //         )
    //         res.json(query)
    //     })
    //     .catch((mensaje) => {
    //         res.send(mensaje)
    //     })

    //     db.desconectarBD()
    // }
    // private deleteAutos = async (req: Request, res: Response) => {
    //     const matricula =req.params.matricula
    //     await db.conectarBD()

    //     await Autos.findOneAndDelete(
    //         {
    //             _matricula: matricula
    //         }
    //     )
    //     .then((doc:any)=>res.send("Ha ido bien"+doc))
    //     .catch((err:any)=> res.send("Error: "+err))
    //     await db.desconectarBD()
    //}
//     private updatePm = async (req: Request, res: Response) => {
//         await db.conectarBD() 
//             .then(async (mensaje) => {
//                 //let cambio: number = 0
//                 const {matriculax, cambio} = req.params
//                 console.log(mensaje)
//                 const query = await Autos.findOneAndUpdate(
//                     {_matricula: matriculax}, {_potenciaMotor: cambio}
//                 )
//         res.json(query)
//     })
//     .catch((mensaje) => {
//     res.send(mensaje)
//     })

//      db.desconectarBD()
//     }



    misRutas(){
        //GET
        this._router.get('/habitaciones', this.getHabitaciones)
        this._router.get('/clientes', this.getClientes)
        this._router.get('/empleados', this.getEmpleados)
        this._router.get('/reservas', this.getReservas)
        //POST
        this._router.post('/habitaciones', this.postHabitacion)
        this._router.post('/empleados', this.postEmpleado)
        this._router.post('/clientes', this.postCliente)
        this._router.post('/reservas', this.postReservas)
        // this._router.get('/autos/:valor', this.getAuto)
        // this._router.post('/auto', this.crearAuto)
        // this._router.put('/modificar', this.modificarAuto)
        // this._router.put('/mod/:matriculaP/:cambioP', this.modificarAuto2)
        // this._router.delete('/auto/:matricula', this.deleteAutos)
        //this._router.put('/autos/:matriculax/:cambio', this.updatePm)
        //UPDATE
        
        //DELETE
    }

}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
