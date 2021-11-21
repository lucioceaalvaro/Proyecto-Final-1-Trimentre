import { leerTeclado } from '../vistas/lecturaTeclado'

export const opcmenuEm = async () => {
    let opcmenuEm: number
    console.log('\n')
    console.log('1.- Crear Habitaciones')
    console.log('2.- Crear Empleados')
    console.log('3.- Crear Clientes')
    console.log('4.- Lista')
    console.log('5.- Calcular Salarios')
    console.log('0.- SALIR')
    opcmenuEm = parseInt( await leerTeclado('--OPCIÓN--') )
    return opcmenuEm
}

//