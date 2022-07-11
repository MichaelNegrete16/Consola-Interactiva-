// Paquetes de terceros
require('colors')
// Helpers
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')



console.clear()

const main = async() => {
    console.log('Hola Mundo')

    let opt = ''

    // Crear modelado
    const tareas = new Tareas()

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                // Listar tarea
                console.log(tareas._listado)
                break;
        }

        await pausa()

    } while (opt !== '0');
    
    // pausa()
}   

main()