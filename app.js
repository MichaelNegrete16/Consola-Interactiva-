// Paquetes de terceros
require('colors')
// Helpers
const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquirerMenu, pausa, leerInput , listadoTareasBorrar, confirmar} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')



console.clear()

const main = async() => {

    let opt = ''
    // Crear modelado
    const tareas = new Tareas()

    // Leer tareas y cargar
    const tareasDB = leerDB()
    if(tareasDB){
        tareas.cargarTareasFromArr(tareasDB)
    }

    do {
        //  Imprime el menu
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                // Listar tarea
                console.log('')
                tareas.listadoCompleto()
                break;
            case '3':
                // Listar tareas completadas
                tareas.listarPendientesCompletadas(true)
                break;
            case '4':
                // Listar tareas completadas
                tareas.listarPendientesCompletadas(false)
                break;
            case '6':
                // Listar tareas para borrar
                const id = await listadoTareasBorrar(tareas.listadoArr)

                // Preguntar si presiona cancelar este codigo no se ejecuta
                if(id !== '0'){
                    // Hacer confirmacion de si esta seguro
                    const okConfirmar = await confirmar('Estas seguro que desea borrar?')
    
                    // borrar tarea
                    if(okConfirmar){
                        tareas.borrarTarea(id)
                        console.log('Tarea borrada con exito!')
                    }
                }

                
                break;
        }
        
        // guardar en el archivo .json
        guardarDB(tareas.listadoArr)

        await pausa()

    } while (opt !== '0');

}   

main()