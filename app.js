// Paquetes de terceros
require('colors')
// Helpers
const { inquirerMenu } = require('./helpers/inquirer')



console.clear()

const main = async() => {
    console.log('Hola Mundo')
    let opt = ''

    do {

        opt = await inquirerMenu()

    } while (opt !== '0');
    
    // pausa()
}   

main()