import { leerTeclado } from '../vistas/lecturaTeclado'

export const opcmenuRe = async () => {
    let opcmenuRe: number
    console.log('\n')
    console.log('1.- Guardar datos')
    console.log('2.- Consulta Habitación por DNI del Cliente')
    console.log('3.- Crear Reserva')
    console.log('4.- Calcular Precio Final de Reserva')
    console.log('5.- Check Out de Habitaciónes')
    console.log('0.- SALIR')
    opcmenuRe = parseInt( await leerTeclado('--OPCIÓN--') )
    return opcmenuRe
}

