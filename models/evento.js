const {v4: uuidv4 } = require('uuid');

class Precios{
    constructor(id, tipo, fecha, hora, lugar, capacidad){
        this.id=uuidv4()
        this.tipo = tipo
        this.fecha=fecha
        this.hora=hora
        this.lugar=lugar
        this.capacidad=capacidad
    }
}

class ListadoEventos{
    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }


cargarTareasFromArray(datos = []){
    datos.forEach(Precios =>{
        this._listado[Precios.id] = Precios;
    });
}
creareventos(datos){
    const evento = new evento(
        datos.tipo,
        datos.fecha,
        datos.hora,
        datos.lugar,
        datos.capacidad);
        this._listado[evento.id] = evento;
}


}


module.exports ={
ListadoEventos
}