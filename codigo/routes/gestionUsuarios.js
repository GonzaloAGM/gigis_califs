const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionUserController = require('../controllers/gestion_usuarios_controller')

subrouter.get('/perfil-terapeuta',gestionUserController.get);

subrouter.post('/editar-terapeuta',gestionUserController.get);
subrouter.post('/editar-terapeuta',gestionUserController.post);

subrouter.get('/crear-terapeuta',gestionUserController.get);
subrouter.get('/crear-terapeuta',gestionUserController.post);

subrouter.get('/perfil-gestor', gestionUserController.get);

subrouter.get('/editar-gestor', gestionUserController.get);
subrouter.get('/editar-gestor', gestionUserController.post);

subrouter.get('/perfil-administrador', gestionUserController.get);

subrouter.get('/editar-administrador', gestionUserController.get);
subrouter.get('/editar-administrador', gestionUserController.post);

subrouter.get('/', gestionUserController.get);
subrouter.post('/', gestionUserController.post);

module.exports = subrouter;
