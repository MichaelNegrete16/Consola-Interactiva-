// Paquetes de terceros
require('colors')
// Helpers
const { mostrarMenu, pausa } = require('./helpers/mensajes')



console.clear()

const main = async() => {
    console.log('Hola Mundo')
    mostrarMenu()
    // pausa()
}   

main()