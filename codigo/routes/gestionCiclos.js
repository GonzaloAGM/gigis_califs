const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionCicloController = require('../controllers/gestion_ciclos_controller')

subrouter.get('/inscribir-en-grupo',gestionCicloController.getInsGrupo);

subrouter.post('/selTera',gestionCicloController.postSelTera);

subrouter.post('/selProg',gestionCicloController.postSelProg);

subrouter.get('/agregar-ciclo',gestionCicloController.getAgrCiclo);

subrouter.post('/agregar-ciclo',gestionCicloController.postAgrCiclo);

subrouter.get('/gestion-perfil-ciclo',gestionCicloController.getPerfilCiclo);

subrouter.get('/', gestionCicloController.get);

module.exports = subrouter;
