const {Router} = require('express');
const { GetEventos, PostEventos, putEventos, deleteEventos } = require('../controllers/evento');
const router = Router();
    
    router.get('/', GetEventos)
    router.post('/', PostEventos)
    router.put('/', putEventos)
    router.delete('/', deleteEventos)

    module.exports = router