// Paquetes de terceros
require('colors')
// Helpers
const { inquirerMenu, pausa } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')



console.clear()

const main = async() => {
    console.log('Hola Mundo')
    let opt = ''

    do {

        opt = await inquirerMenu()

        await pausa()

    } while (opt !== '0');
    
    // pausa()
}   

main()