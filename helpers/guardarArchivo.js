const fs = require('fs')

// Ruta del guardado de archivo
const archivo = './db/data.json'

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data))
}

const leerDB = () => {
    if(! fs.existsSync(archivo)){
        return null
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'})
    // Cambiar de string a JSON
    const data = JSON.parse(info)
    
    return data
}

module.exports = {
    guardarDB,
    leerDB
}