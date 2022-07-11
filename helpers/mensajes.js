require('colors')

const mostrarMenu = () => {
    // En ves de hacerlo con async sale mejor hacerlo manualmente, con async solo retornamos un valor
    return new Promise( resolve => {

        console.clear()
        console.log('====================='.rainbow)
        console.log('Seleccione una opcion')
        console.log('=====================\n'.rainbow)    
    
        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tarea`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tareas`)
        console.log(`${'6.'.green} Borrar una tarea`)
        console.log(`${'0.'.green} Salir \n`)
    
        // recibir informacion del usuario
        // Preparar la interfas que recibira el usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        // Preguntar al usuario y capturar datos
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close()
            resolve(opt)
        })

    } )


}

const pausa = () => {

    return new Promise ( resolve => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        // Preguntar al usuario y capturar datos
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close()
            resolve()
        })    
    } )

}

module.exports = {
    mostrarMenu,
    pausa
}