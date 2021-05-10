const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionPrograController = require('../controllers/gestion_programas_controller')
const isAuth = require('../util/is-auth.js');

subrouter.get('/gestion-nivel-objetivos',isAuth, gestionPrograController.getGpObjetivos);

subrouter.post('/gestion-nivel-objetivos', isAuth, gestionPrograController.postGpObjetivos);

subrouter.get('/', isAuth, gestionPrograController.get);

subrouter.post('/', isAuth, gestionPrograController.postNuevoPrograma);

subrouter.post('/editarPrograma', gestionPrograController.editarPrograma);

subrouter.post('/agregarNivel', gestionPrograController.agregarNivel);

module.exports = subrouter;