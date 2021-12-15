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
const menu_1 = require("./vistas/menu");
const lecturaTeclado_1 = require("./vistas/lecturaTeclado");
const menuEm_1 = require("./vistas/menuEm");
const database_1 = require("./database/database");
const funciones_1 = require("./funciones");
const menuRe_1 = require("./vistas/menuRe");
const hBasica_1 = require("./clases/subclases/hBasica");
const hFamiliar_1 = require("./clases/subclases/hFamiliar");
const hVip_1 = require("./clases/subclases/hVip");
const Global_1 = require("./clases/Global");
const eCocina_1 = require("./clases/subclases/eCocina");
const eRecepcion_1 = require("./clases/subclases/eRecepcion");
const eLimpieza_1 = require("./clases/subclases/eLimpieza");
const Cliente_1 = require("./clases/Cliente");
const Reserva_1 = require("./clases/Reserva");
const ResSchema_1 = require("./Schema/ResSchema");
const HabiSchema_1 = require("./Schema/HabiSchema");
const hotel = () => __awaiter(void 0, void 0, void 0, function* () {
    let Nhabitacion2;
    let Empleado2;
    let elecM = yield (0, menu_1.opcmenu)();
    let cont = 0;
    let BoolDesayuno;
    let BoolSupletoria;
    let BoolSpa;
    let BoolNoctur;
    switch (elecM) {
        case 1:
            //Empresa
            let elecEm = yield (0, menuEm_1.opcmenuEm)();
            console.log("############################################################\n");
            console.log("################# PLATAFORMA DE EMPRESA #################\n");
            console.log("############################################################\n");
            switch (elecEm) {
                case 1:
                    //Crear Habitaciones
                    let tipo = yield (0, lecturaTeclado_1.leerTeclado)('Tipo de Habitación');
                    let IDHab = yield (0, lecturaTeclado_1.leerTeclado)('Identificador de Habitación');
                    let camas = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('Numero de Camas'));
                    let pNoche = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('Precio por noche'));
                    if (tipo == "b") {
                        let Desayuno = yield (0, lecturaTeclado_1.leerTeclado)('Desayuno');
                        if (Desayuno == "si") {
                            BoolDesayuno = true;
                        }
                        else {
                            BoolDesayuno = false;
                        }
                        Nhabitacion2 = new hBasica_1.HBasica(tipo, IDHab, camas, pNoche, BoolDesayuno);
                        Global_1.Global.habitaciones.push(Nhabitacion2);
                    }
                    else if (tipo == "f") {
                        let Supletoria = yield (0, lecturaTeclado_1.leerTeclado)('Supletoria');
                        if (Supletoria == "si") {
                            BoolSupletoria = true;
                        }
                        else {
                            BoolSupletoria = false;
                        }
                        Nhabitacion2 = new hFamiliar_1.HFamiliar(tipo, IDHab, camas, pNoche, BoolSupletoria);
                        Global_1.Global.habitaciones.push(Nhabitacion2);
                    }
                    else if (tipo == "v") {
                        let Spa = yield (0, lecturaTeclado_1.leerTeclado)('Spa');
                        if (Spa == "si") {
                            BoolSpa = true;
                        }
                        else {
                            BoolSpa = false;
                        }
                        Nhabitacion2 = new hVip_1.HVip(tipo, IDHab, camas, pNoche, BoolSpa);
                        Global_1.Global.habitaciones.push(Nhabitacion2);
                    }
                    let a = yield (0, lecturaTeclado_1.leerTeclado)('¿Quieres ver las habitaciones creadas? s o n');
                    if (a == "s") {
                        Global_1.Global.habitaciones.forEach(element => {
                            console.log(element);
                        });
                    }
                    hotel();
                    break;
                case 2:
                    //Crear Empleado 
                    let tipoE = yield (0, lecturaTeclado_1.leerTeclado)('Tipo de Empleado');
                    let DniEmp = yield (0, lecturaTeclado_1.leerTeclado)('Dni Empleado');
                    let SalarioBase = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('Salario Base'));
                    if (tipoE == "Ec") {
                        let NEstrella = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('Numero de Estrellas Michelin'));
                        let Titulacion = yield (0, lecturaTeclado_1.leerTeclado)('Titulo de competencia');
                        Empleado2 = new eCocina_1.ECocina(DniEmp, SalarioBase, NEstrella, Titulacion);
                        Global_1.Global.trabajadores.push(Empleado2);
                    }
                    else if (tipoE == "Er") {
                        let Snocturnidad = yield (0, lecturaTeclado_1.leerTeclado)('Nocturnidad');
                        if (Snocturnidad == "si") {
                            BoolNoctur = true;
                        }
                        else {
                            BoolNoctur = false;
                        }
                        Empleado2 = new eRecepcion_1.ERecepcion(DniEmp, SalarioBase, BoolNoctur);
                        Global_1.Global.trabajadores.push(Empleado2);
                    }
                    else if (tipoE == "El") {
                        Global_1.Global.habitaciones.forEach(element => {
                            console.log(element);
                        });
                        let habitacionesLimp = yield (0, lecturaTeclado_1.leerTeclado)('Numero de habitaciones limpiadas separados por ","');
                        let NHLimp = new Array();
                        habitacionesLimp.toLowerCase().trim().split(",").forEach(element => {
                            Global_1.Global.habitaciones.forEach(h => {
                                if (h.IDHab == element) {
                                    NHLimp.push(h);
                                }
                            });
                        });
                        Empleado2 = new eLimpieza_1.ELimpieza(DniEmp, SalarioBase, NHLimp);
                        Global_1.Global.trabajadores.push(Empleado2);
                        let c = yield (0, lecturaTeclado_1.leerTeclado)('¿Quieres ver las habitaciones asignadas? s o n');
                        if (c == "s") {
                            Global_1.Global.trabajadores.forEach(element => {
                                console.log(element);
                            });
                        }
                    }
                    hotel();
                    break;
                case 3:
                    //Crear Cliente 
                    let AltaCliente;
                    let dniCl = yield (0, lecturaTeclado_1.leerTeclado)('Dni del Cliente');
                    let nombreCl = yield (0, lecturaTeclado_1.leerTeclado)('Nombre del Cliente');
                    let nTarheta = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('Numero de Tarjeta de Credito'));
                    AltaCliente = new Cliente_1.Cliente(dniCl, nombreCl, nTarheta);
                    Global_1.Global.clientes.push(AltaCliente);
                    hotel();
                    break;
                case 4:
                    console.log("###################################");
                    console.log("1.-Listar Clientes");
                    console.log("2.-Listar Habitaciones");
                    console.log("3.-Listar Empleados");
                    console.log("4.-Listar Reservas");
                    let Selec = parseInt(yield (0, lecturaTeclado_1.leerTeclado)("Seleccion"));
                    switch (Selec) {
                        case 1:
                            //Listar Clientes 
                            Global_1.Global.clientes.forEach(element => {
                                console.log(element.nombre, element.dni);
                            });
                            break;
                        case 2:
                            //Listar Habitaciones
                            Global_1.Global.habitaciones.forEach(element => {
                                console.log(element.IDHab, element.estado);
                            });
                            break;
                        case 3:
                            //Listar Empleados
                            Global_1.Global.trabajadores.forEach(element => {
                                console.log(element.dni, element.tipo);
                            });
                            break;
                        case 4:
                            //Listar Reservas
                            Global_1.Global.reservas.forEach(element => {
                                console.log(element);
                            });
                            break;
                    }
                    hotel();
                    break;
                case 5:
                    //Calcular Sueldo
                    //Maximo
                    let max = 0;
                    let max_id = "";
                    let min_id = "";
                    let min = Global_1.Global.trabajadores[0].calcularSueldo();
                    let suma = 0, n = 0, media;
                    Global_1.Global.trabajadores.forEach(element => {
                        if (element.calcularSueldo() > max) {
                            max = element.calcularSueldo();
                            max_id = element.dni;
                        }
                        if (element.calcularSueldo() < min) {
                            min = element.calcularSueldo();
                            min_id = element.dni;
                        }
                    });
                    Global_1.Global.trabajadores.forEach(element => {
                        suma += element.calcularSueldo();
                        n++;
                    });
                    media = suma / n;
                    let informe = ("INFORME DE LOS SUELDOS\n###################################\n\n\tSUELDO MAXIMO:\n\t\t DNI: " + max_id +
                        "\n\t\tSUELDO: " + max + "\n\n################################" + "\n\n\tSUELDO MINIMO:\n\t\t DNI: " + min_id +
                        "\n\t\tSUELDO: " + min + "\n\n################################" + "\n\n\tSUELDO MEDIO:\n\t\t : " + media);
                    console.log(informe);
                    hotel();
                    break;
                case 6:
                    yield (0, funciones_1.EliminarCliente)();
                    hotel();
                    break;
                case 0:
                    break;
            }
            break;
        case 2:
            //Proceso de Reserva
            console.log("############################################################\n");
            console.log("################# PLATAFORMA DE RESERVA #################\n");
            console.log("############################################################\n");
            let elecRe = yield (0, menuRe_1.opcmenuRe)();
            switch (elecRe) {
                case 1:
                    //Guardar datos (Datos de Prueba)
                    (0, funciones_1.salvar)();
                    hotel();
                    break;
                case 2:
                    //Consultas
                    (0, funciones_1.BusquedaReserva)();
                    hotel();
                    break;
                case 3:
                    //Crear Hacer Reserva
                    let Reserva2;
                    Global_1.Global.clientes.forEach(element => {
                        console.log("Dni Clientes :" + element.dni + "\n");
                    });
                    Global_1.Global.habitaciones.forEach(element => {
                        if (element.estado == false) {
                            console.log("Id.Haitaciones Libres :" + element.IDHab);
                        }
                    });
                    let dniCl = yield (0, lecturaTeclado_1.leerTeclado)('Dni del Cliente');
                    let IdHab = yield (0, lecturaTeclado_1.leerTeclado)('Identificador de la Habitacion');
                    let NDias = parseInt(yield (0, lecturaTeclado_1.leerTeclado)('Numero de Dias Hospedados'));
                    let nPersonas = parseInt(yield (0, lecturaTeclado_1.leerTeclado)("Numero de Personas"));
                    Reserva2 = new Reserva_1.Reserva(dniCl, NDias, IdHab, nPersonas);
                    Global_1.Global.habitaciones.forEach((element2, index) => {
                        if (element2.IDHab == IdHab) {
                            Global_1.Global.habitaciones[index].estado = true;
                        }
                    });
                    Global_1.Global.reservas.push(Reserva2);
                    hotel();
                    break;
                case 4:
                    //Calcular Precio Reserva
                    yield database_1.db.conectarBD();
                    //let dReserva:iReservas
                    let DniCl = yield (0, lecturaTeclado_1.leerTeclado)(' Dni del Cliente\n ');
                    let tmpdHabitaciones;
                    let tmpReservas;
                    let dHabitacion;
                    let dReserva;
                    let query = yield ResSchema_1.Reservas.find({ _cliente: DniCl });
                    let query2 = yield HabiSchema_1.Habitaciones.find({});
                    let PrecioFinal = 0, PrecioBasica = 0, PrecioFamiliares = 0, PrecioVip = 0;
                    for (dHabitacion of query2) {
                        //El precio varia en base al tipo de Habitacion que sea
                        if (dHabitacion._tipoObjeto === "b") {
                            tmpdHabitaciones = new hBasica_1.HBasica(dHabitacion._tipoObjeto, dHabitacion._IdHab, dHabitacion._Camas, dHabitacion._PNoche, dHabitacion._desayuno);
                            for (dReserva of query) {
                                tmpReservas = new Reserva_1.Reserva(dReserva._cliente, dReserva._nDias, dReserva._habitacion, dReserva._nPersonas);
                                if (DniCl == tmpReservas.cliente) {
                                    if (tmpdHabitaciones.IDHab == tmpReservas.habitacion) {
                                        PrecioBasica = tmpdHabitaciones.pNoche * tmpReservas.nDias;
                                        if (dHabitacion._desayuno == true) {
                                            PrecioBasica = PrecioBasica * 1.25;
                                        }
                                        console.log("####################### PRECIO FINAL DE HOSPEDAJE BASICA #######################");
                                        console.log("Precio de Habitacion :" + PrecioBasica + "€\n");
                                    }
                                }
                            }
                        }
                        else if (dHabitacion._tipoObjeto === "f") {
                            tmpdHabitaciones = new hFamiliar_1.HFamiliar(dHabitacion._tipoObjeto, dHabitacion._IdHab, dHabitacion._Camas, dHabitacion._PNoche, dHabitacion._supletoria);
                            for (dReserva of query) {
                                tmpReservas = new Reserva_1.Reserva(dReserva._cliente, dReserva._nDias, dReserva._habitacion, dReserva._nPersonas);
                                if (DniCl == tmpReservas.cliente) {
                                    if (tmpdHabitaciones.IDHab == tmpReservas.habitacion) {
                                        PrecioFamiliares = tmpdHabitaciones.pNoche * tmpReservas.nDias;
                                        if (dHabitacion._supletoria == true) {
                                            PrecioFamiliares = PrecioFamiliares * 1.15;
                                        }
                                        console.log("####################### PRECIO FINAL DE HOSPEDAJE FAMILIAR #######################");
                                        console.log("Precio de Habitacion :" + PrecioFamiliares + "€\n");
                                    }
                                }
                            }
                        }
                        else if (dHabitacion._tipoObjeto == "v") {
                            tmpdHabitaciones = new hVip_1.HVip(dHabitacion._tipoObjeto, dHabitacion._IdHab, dHabitacion._Camas, dHabitacion._PNoche, dHabitacion._spa);
                            for (dReserva of query) {
                                tmpReservas = new Reserva_1.Reserva(dReserva._cliente, dReserva._nDias, dReserva._habitacion, dReserva._nPersonas);
                                // console.log(tmpReservas.habitacion +" = "+ tmpdHabitaciones.IDHab)
                                if (DniCl == tmpReservas.cliente) {
                                    if (tmpdHabitaciones.IDHab == tmpReservas.habitacion) {
                                        PrecioVip = tmpdHabitaciones.pNoche * tmpReservas.nDias;
                                        if (dHabitacion._spa == true) {
                                            PrecioVip = PrecioVip * 1.35;
                                        }
                                        console.log("####################### PRECIO FINAL DE HOSPEDAJE VIP#######################");
                                        console.log("Precio de Habitacion :" + PrecioVip + "€\n");
                                    }
                                }
                            }
                        }
                    }
                    PrecioFinal = PrecioBasica + PrecioFamiliares + PrecioVip;
                    console.log("Precio Total de la Reserva :" + PrecioFinal + "€");
                    yield database_1.db.desconectarBD();
                    hotel();
                    break;
                case 5:
                    //Volver a asignar una Habitacion Libre
                    Global_1.Global.habitaciones.forEach((element) => {
                        console.log(element);
                    });
                    let IDCko = yield (0, lecturaTeclado_1.leerTeclado)('Numero de la habitación que queda libre');
                    Global_1.Global.habitaciones.forEach((element, index) => {
                        if (element.IDHab == IDCko)
                            Global_1.Global.habitaciones[index].estado = false;
                    });
                    hotel();
                    break;
                case 0:
                    //salir 
                    break;
            }
            break;
        case 3:
            (0, funciones_1.DPrueba)();
            hotel();
            break;
        case 100:
            let selcbd = yield parseInt(yield (0, lecturaTeclado_1.leerTeclado)('1.-Para guardar en mongo Atlas --- 2.- Para guardar en local'));
            if (selcbd == 1) {
                database_1.db.cambiarBD(true);
            }
            else if (selcbd == 2) {
                database_1.db.cambiarBD(false);
            }
            hotel();
            break;
    }
});
(0, funciones_1.Inicio)();
hotel();
