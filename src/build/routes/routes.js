"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const HabiSchema_1 = require("../Schema/HabiSchema");
const EmpSchema_1 = require("../Schema/EmpSchema");
const ResSchema_1 = require("../Schema/ResSchema");
const CliSchema_1 = require("../Schema/CliSchema");
const database_1 = require("../database/database");
class DatoRoutes {
    constructor() {
        this.getHabitaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield HabiSchema_1.Habitaciones.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield CliSchema_1.Clientes.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield EmpSchema_1.Empleado.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield ResSchema_1.Reservas.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.postHabitacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, idHab, camas, pnoche, estado, desayuno, supletonia, spa } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _IdHab: idHab,
                _Camas: camas,
                _PNoche: pnoche,
                _estado: estado,
                _desayuno: desayuno,
                _supletonia: supletonia,
                _spa: spa
            };
            const oSchema = new HabiSchema_1.Habitaciones(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipo, dni, salarioBase, titulacion, Nestrellas, habitaciones, nocturnidad } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipo,
                _dni: dni,
                _salarioBase: salarioBase,
                _Titulacion: titulacion,
                _NEstrella: Nestrellas,
                _habitationes: habitaciones,
                _Nocturnidad: nocturnidad,
            };
            const oSchema = new EmpSchema_1.Empleado(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, nTarjeta } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                nTarjeta: nTarjeta
            };
            const oSchema = new CliSchema_1.Clientes(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { clientes, nDias, habitacion, nPersonas, precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _clientes: clientes,
                _nDias: nDias,
                _habitacion: habitacion,
                _nPersonas: nPersonas,
                _precio: precio
            };
            const oSchema = new ResSchema_1.Reservas(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
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
    misRutas() {
        //GET
        this._router.get('/habitaciones', this.getHabitaciones);
        this._router.get('/clientes', this.getClientes);
        this._router.get('/empleados', this.getEmpleados);
        this._router.get('/reservas', this.getReservas);
        //POST
        this._router.post('/habitaciones', this.postHabitacion);
        this._router.post('/empleados', this.postEmpleado);
        this._router.post('/clientes', this.postCliente);
        this._router.post('/reservas', this.postReservas);
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
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
