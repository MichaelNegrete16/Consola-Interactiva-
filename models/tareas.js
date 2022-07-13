const Tarea = require("./tarea")

class Tareas {

    _listado = {}

    get listadoArr() {

        const listado = []
        // Recorrer cada listado
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        } )

        return listado

    }

    constructor(){
        this._listado = {}
    }

    borrarTarea ( id = '' ) {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    cargarTareasFromArr = (tareas = []) => {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    listadoCompleto() {

        this.listadoArr.forEach((tarea,i) => {
            const idx = `${i+1}.`.green
            console.log( `${idx} ${tarea.desc} :: ${ (tarea.completadoEn) ? 'Completado'.green : 'Pendiente'.red }` )
        })

    }

    listarPendientesCompletadas( completadas = true){

        let contador = 0
        this.listadoArr.forEach(tarea => {

            if(completadas){

                if(tarea.completadoEn){
                    contador+=1
                    console.log( `${contador.toString().green}. ${tarea.desc} :: ${ tarea.completadoEn}` )
                }   

            }else{

                if(!tarea.completadoEn){
                    contador+=1
                    console.log( `${contador.toString().green}. ${tarea.desc} :: ${ (tarea.completadoEn) ? 'Completado'.green : 'Pendiente'.red }` )
                }   

            }
        })

    }

    toggleCompletada(ids = []){

        ids.forEach(id => {
            const tarea = this._listado[id]

            // Verificar si no esta completada 
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        
        })

        this.listadoArr.forEach(tarea => {
            // Evaluar si la tarea para quitarle el completado
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }
        })

    }

}

module.exports = Tareas