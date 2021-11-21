import { leerTeclado } from '../vistas/lecturaTeclado'

export const opcmenu = async () => {
    let opcmenu: number
    console.log("###################################################\n")
    console.log("############# GESTION DEL HOTEL ##############\n")
    console.log("###################################################\n")

    console.log('\n')
    console.log('1.- Plataforma de la Empresa')
    console.log('2.- Reserva de Habitación')
    console.log('3.- Cargar Datos de Prueba')
    console.log('100.-Cambiar de Base de Datos Atlas')
    console.log('0.- SALIR')
    opcmenu = parseInt( await leerTeclado('--OPCIÓN--\n') )
    return opcmenu
}

