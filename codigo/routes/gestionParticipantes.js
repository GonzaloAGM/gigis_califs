const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionParticController = require('../controllers/gestion_participantes_controller')

subrouter.get('/editar-participante',gestionParticController.getEditPartic);

subrouter.post('/editar-participante',gestionParticController.postEditPartic);

subrouter.get('/perfil-participante',gestionParticController.getPerfilPartic);

subrouter.get('/', gestionParticController.get);

subrouter.post('/', gestionParticController.post);

module.exports = subrouter;

