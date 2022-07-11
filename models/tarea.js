const { v4: uuidv4 } = require('uuid')

class Tarea {

    id=''
    desc=''
    completadoEn = 'fecha ........'

    // Se va ejecutar cada vez que creemos una nueva instancia de la tarea
    constructor( desc ) {

        // asignar id con la libreria de uuid
        this.id = uuidv4()
        this.desc = desc
        this.completadoEn = null

    }

}


module.exports = Tarea