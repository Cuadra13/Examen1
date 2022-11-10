const{request, response} = require('express')
const { ListadoEventos } = require('../models/evento')
const {guardarDB, leerDB } = require('../helpers/gestorDB')

const GetEventos = (req = request,res = response) =>{
    let lista = new ListadoEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostEventos= (req = request, res = response) =>{
    let lista = new ListadoEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)
    lista.creareventos(req.body)
    guardarDB(lista.listadoArr,'evento')
    res.send('Registro creado')
}

const putEventos= (req = request, res = response) => {
    let lista = new ListadoEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)
    const datos = lista.listadoArr.map(p =>
p.id == req.params.id
?{"id":p.id,...req.body}
:p
        );
    guardarDB(datos,'evento')
    res.send('Registro actualizado')
}

const deleteEventos = (req = request, res = response) => {
    let lista = new ListadoEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>item.id !== req.params.id )
    guardarDB(data,'evento')
    res.send('Registro eliminado')
}

module.exports = {
    GetEventos,
    PostEventos,
    putEventos,
    deleteEventos
}