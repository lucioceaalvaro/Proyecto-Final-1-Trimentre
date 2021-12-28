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
exports.EliminarCliente = exports.Inicio = exports.BusquedaReserva = exports.salvar = exports.DPrueba = void 0;
const eCocina_1 = require("./clases/subclases/eCocina");
const eLimpieza_1 = require("./clases/subclases/eLimpieza");
const eRecepcion_1 = require("./clases/subclases/eRecepcion");
const database_1 = require("./database/database");
const EmpSchema_1 = require("./Schema/EmpSchema");
const hBasica_1 = require("./clases/subclases/hBasica");
const hFamiliar_1 = require("./clases/subclases/hFamiliar");
const hVip_1 = require("./clases/subclases/hVip");
const HabiSchema_1 = require("./Schema/HabiSchema");
const Cliente_1 = require("./clases/Cliente");
const Reserva_1 = require("./clases/Reserva");
const ResSchema_1 = require("./Schema/ResSchema");
const CliSchema_1 = require("./Schema/CliSchema");
const lecturaTeclado_1 = require("./vistas/lecturaTeclado");
const Global_1 = require("./clases/Global");
let DPrueba = () => __awaiter(void 0, void 0, void 0, function* () {
    Global_1.Global.trabajadores.push(new eCocina_1.ECocina("2", 2000, 2, "fpm"));
    Global_1.Global.trabajadores.push(new eRecepcion_1.ERecepcion("1", 2000, true));
    Global_1.Global.trabajadores.push(new eLimpieza_1.ELimpieza("3", 2000, []));
    //let habitaciones: Array<Habitacion> = new Array<Habitacion>();
    Global_1.Global.habitaciones.push(new hBasica_1.HBasica("b", "1", 3, 40, false));
    Global_1.Global.habitaciones.push(new hFamiliar_1.HFamiliar("f", "2", 3, 120, true));
    Global_1.Global.habitaciones.push(new hVip_1.HVip("v", "3", 3, 200, true));
    //let clientes: Array<Cliente> = new Array<Cliente>();
    Global_1.Global.clientes.push(new Cliente_1.Cliente("1", "alvaro", 1234));
    //let reservas: Array<Reserva> = new Array<Reserva>();
    Global_1.Global.reservas.push(new Reserva_1.Reserva("1", 4, "1", 4));
    yield database_1.db.conectarBD();
    yield EmpSchema_1.Empleado.deleteMany({});
    yield HabiSchema_1.Habitaciones.deleteMany({});
    yield CliSchema_1.Clientes.deleteMany({});
    yield ResSchema_1.Reservas.deleteMany({});
    yield database_1.db.desconectarBD();
});
exports.DPrueba = DPrueba;
let salvar = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    yield EmpSchema_1.Empleado.deleteMany({});
    yield HabiSchema_1.Habitaciones.deleteMany({});
    yield CliSchema_1.Clientes.deleteMany({});
    yield ResSchema_1.Reservas.deleteMany({});
    yield database_1.db.desconectarBD();
    // objeto schema
    let dShemaEmp = {
        _tipoObjeto: null,
        _dni: null,
        _salariosBase: null,
    };
    let dShemaECo = {
        _tipoObjeto: null,
        _dni: null,
        _salariosBase: null,
        _Titulacion: null,
        _NEstrella: null
    };
    let dShemaELi = {
        _tipoObjeto: null,
        _dni: null,
        _salariosBase: null,
        _habitaciones: null
    };
    let dShemaERe = {
        _tipoObjeto: null,
        _dni: null,
        _salariosBase: null,
        _Nocturnidad: null
    };
    let dShemaHab = {
        _IdHab: null,
        _estado: null,
        _Camas: null,
        _PNoche: null,
        _tipoObjeto: null
    };
    let dShemaHBasica = {
        _IdHab: null,
        _estado: null,
        _Camas: null,
        _PNoche: null,
        _tipoObjeto: null,
        _desayuno: null
    };
    let dShemaHFamiliar = {
        _IdHab: null,
        _estado: null,
        _Camas: null,
        _PNoche: null,
        _tipoObjeto: null,
        _supletoria: null
    };
    let dShemaHVip = {
        _IdHab: null,
        _estado: null,
        _Camas: null,
        _PNoche: null,
        _tipoObjeto: null,
        _spa: null
    };
    let dShemaCli = {
        _dni: null,
        _nombre: null,
        _nTarjeta: null
    };
    let dShemaReserva = {
        _cliente: null,
        _habitacion: null,
        _nDias: null,
        _nPersonas: null,
        _Precio: null
    };
    // documento schema de tipo 
    ////////////////////////////     
    let ESchema;
    let HSchema;
    let RSchema;
    let CSchema;
    yield database_1.db.conectarBD();
    //Empleados
    for (let p of Global_1.Global.trabajadores) {
        dShemaECo._dni = dShemaELi._dni = dShemaERe._dni = p.dni;
        dShemaECo._tipoObjeto = dShemaELi._tipoObjeto = dShemaERe._tipoObjeto = p.tipo;
        dShemaECo._salariosBase = dShemaELi._salariosBase = dShemaERe._salariosBase = p.SalarioBase;
        if (p instanceof eCocina_1.ECocina) {
            dShemaECo._tipoObjeto = "Ec";
            dShemaECo._Titulacion = p.Titulacion;
            dShemaECo._NEstrella = p.NEstrella;
            ESchema = new EmpSchema_1.Empleado(dShemaECo);
        }
        else if (p instanceof eLimpieza_1.ELimpieza) {
            dShemaELi._tipoObjeto = "El";
            dShemaELi._habitaciones = p.get_Habitaciones;
            ESchema = new EmpSchema_1.Empleado(dShemaELi);
        }
        else if (p instanceof eRecepcion_1.ERecepcion) {
            dShemaERe._tipoObjeto = "Er";
            dShemaERe._Nocturnidad = p.nocturnidad;
            ESchema = new EmpSchema_1.Empleado(dShemaERe);
        }
        yield ESchema.save();
    }
    //////Habitaciones
    for (let a of Global_1.Global.habitaciones) {
        // valores comunes ->
        dShemaHBasica._IdHab = dShemaHFamiliar._IdHab = dShemaHVip._IdHab = a.IDHab;
        dShemaHBasica._tipoObjeto = dShemaHFamiliar._tipoObjeto = dShemaHVip._tipoObjeto = a.tipo;
        dShemaHBasica._estado = dShemaHFamiliar._estado = dShemaHVip._estado = a.estado;
        dShemaHBasica._Camas = dShemaHFamiliar._Camas = dShemaHVip._Camas = a.camas;
        dShemaHBasica._PNoche = dShemaHFamiliar._PNoche = dShemaHVip._PNoche = a.pNoche;
        if (a instanceof hBasica_1.HBasica) {
            dShemaHBasica._tipoObjeto = "b";
            dShemaHBasica._desayuno = a.desayuno;
            HSchema = new HabiSchema_1.Habitaciones(dShemaHBasica);
        }
        else if (a instanceof hFamiliar_1.HFamiliar) {
            dShemaHFamiliar._tipoObjeto = "f";
            dShemaHFamiliar._supletoria = a.supletoria;
            HSchema = new HabiSchema_1.Habitaciones(dShemaHFamiliar);
        }
        else if (a instanceof hVip_1.HVip) {
            dShemaHVip._tipoObjeto = "v";
            dShemaHVip._spa = a.spa;
            HSchema = new HabiSchema_1.Habitaciones(dShemaHVip);
        }
        yield HSchema.save();
    }
    //////Clientes
    for (let c of Global_1.Global.clientes) {
        dShemaCli._dni = c.dni;
        dShemaCli._nombre = c.nombre;
        dShemaCli._nTarjeta = c.nTarjeta;
        CSchema = new CliSchema_1.Clientes(dShemaCli);
        yield CSchema.save();
    }
    /////Reservas
    for (let b of Global_1.Global.reservas) {
        dShemaReserva._cliente = b.cliente;
        dShemaReserva._habitacion = b.habitacion;
        dShemaReserva._nDias = b.nDias;
        dShemaReserva._nPersonas = b.nPersonas;
        dShemaReserva._Precio = b.Precio;
        RSchema = new ResSchema_1.Reservas(dShemaReserva);
        yield RSchema.save();
    }
    yield database_1.db.desconectarBD();
});
exports.salvar = salvar;
let BusquedaReserva = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    let dCliente;
    let dShemaReserva;
    let Cdni = yield (0, lecturaTeclado_1.leerTeclado)('Dni Cliente');
    let query = yield CliSchema_1.Clientes.find({ _dni: Cdni });
    let query2 = yield ResSchema_1.Reservas.find({});
    for (dCliente of query) {
        for (dShemaReserva of query2) {
            if (dCliente._dni == dShemaReserva._cliente) {
                console.log("Habitacion Nº" + dShemaReserva);
            }
        }
    }
    yield database_1.db.desconectarBD();
});
exports.BusquedaReserva = BusquedaReserva;
let Inicio = () => __awaiter(void 0, void 0, void 0, function* () {
    ////HABITACIONES
    yield database_1.db.conectarBD();
    yield EmpSchema_1.Empleado.deleteMany({});
    yield HabiSchema_1.Habitaciones.deleteMany({});
    yield CliSchema_1.Clientes.deleteMany({});
    yield ResSchema_1.Reservas.deleteMany({});
    yield database_1.db.desconectarBD();
    yield database_1.db.conectarBD();
    let tmpdHabitaciones;
    let dHabitacion;
    let query = yield HabiSchema_1.Habitaciones.find({});
    for (dHabitacion of query) {
        if (dHabitacion._tipoObjeto == "b") {
            tmpdHabitaciones = new hBasica_1.HBasica(dHabitacion._tipoObjeto, dHabitacion._IdHab, dHabitacion._Camas, dHabitacion._PNoche, dHabitacion._desayuno);
            Global_1.Global.habitaciones.push(tmpdHabitaciones);
        }
        else if (dHabitacion._tipoObjeto == "f") {
            tmpdHabitaciones = new hFamiliar_1.HFamiliar(dHabitacion._tipoObjeto, dHabitacion._IdHab, dHabitacion._Camas, dHabitacion._PNoche, dHabitacion._supletoria);
            Global_1.Global.habitaciones.push(tmpdHabitaciones);
        }
        else if (dHabitacion._tipoObjeto == "v") {
            tmpdHabitaciones = new hVip_1.HVip(dHabitacion._tipoObjeto, dHabitacion._IdHab, dHabitacion._Camas, dHabitacion._PNoche, dHabitacion._spa);
            Global_1.Global.habitaciones.push(tmpdHabitaciones);
        }
    }
    /*Global.habitaciones.forEach(element=>{
      console.log(element)
    })*/
    yield database_1.db.desconectarBD();
    ///////EMPLEADOS
    yield database_1.db.conectarBD();
    let tmpEmpleado;
    let dEmpleado;
    let query2 = yield EmpSchema_1.Empleado.find({});
    for (dEmpleado of query2) {
        if (dEmpleado._tipoObjeto == "Ec") {
            tmpEmpleado = new eCocina_1.ECocina(dEmpleado._dni, dEmpleado._salariosBase, dEmpleado._NEstrella, dEmpleado._Titulacion);
            Global_1.Global.trabajadores.push(tmpEmpleado);
        }
        else if (dEmpleado._tipoObjeto == "Er") {
            tmpEmpleado = new eRecepcion_1.ERecepcion(dEmpleado._dni, dEmpleado._salariosBase, dEmpleado._Nocturnidad);
            Global_1.Global.trabajadores.push(tmpEmpleado);
        }
        else if (dEmpleado._tipoObjeto == "Ev") {
            tmpEmpleado = new eLimpieza_1.ELimpieza(dEmpleado._dni, dEmpleado._salariosBase, dEmpleado._habitaciones);
            Global_1.Global.trabajadores.push(tmpEmpleado);
        }
    }
    yield database_1.db.desconectarBD();
    /*Global.trabajadores.forEach(element=>{
        console.log(element)
    })
    */
    ///Clientes
    yield database_1.db.conectarBD();
    let tmpCliente;
    let dCliente;
    let query3 = yield CliSchema_1.Clientes.find({});
    for (dCliente of query3) {
        tmpCliente = new Cliente_1.Cliente(dCliente._dni, dCliente._nombre, dCliente._nTarjeta);
        Global_1.Global.clientes.push(tmpCliente);
    }
    yield database_1.db.desconectarBD();
    ///Reservas
    yield database_1.db.conectarBD();
    let tmpReserva;
    let dReserva;
    let query4 = yield ResSchema_1.Reservas.find({});
    for (dReserva of query4) {
        tmpReserva = new Reserva_1.Reserva(dReserva._cliente, dReserva._nDias, dReserva._habitacion, dReserva._nPersonas);
        Global_1.Global.reservas.push(tmpReserva);
    }
    yield database_1.db.desconectarBD();
});
exports.Inicio = Inicio;
let EliminarCliente = () => __awaiter(void 0, void 0, void 0, function* () {
    let dniCl = yield (0, lecturaTeclado_1.leerTeclado)("Dni del Cliente a eliminar");
    yield database_1.db.conectarBD();
    let query = yield CliSchema_1.Clientes.findOneAndDelete({ _dni: dniCl })
        .then(() => console.log("Elimido Correctamente"))
        .catch((fallo) => console.log("Fallo: " + fallo));
    yield database_1.db.desconectarBD();
    Global_1.Global.clientes.forEach((element, index) => {
        if (element.dni == dniCl) {
            Global_1.Global.clientes.splice(index, 1);
        }
    });
});
exports.EliminarCliente = EliminarCliente;
