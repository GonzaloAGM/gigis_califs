const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionUserController = require('../controllers/gestion_usuarios_controller')

subrouter.get('/perfil-terapeuta',gestionUserController.getPerfilTerapeuta);

subrouter.post('/editar-terapeuta',gestionUserController.getEditarTerapeuta);
subrouter.post('/editar-terapeuta',gestionUserController.postEditarTerapeuta);

subrouter.get('/crear-terapeuta',gestionUserController.getCrearTerapeuta);
subrouter.get('/crear-terapeuta',gestionUserController.postCrearTerapeuta);

subrouter.get('/perfil-gestor', gestionUserController.getPerfilGestor);

subrouter.get('/editar-gestor', gestionUserController.getEditarGestor);
subrouter.get('/editar-gestor', gestionUserController.postEditarGestor);

subrouter.get('/perfil-administrador', gestionUserController.getPerfilAdministrador);

subrouter.get('/editar-administrador', gestionUserController.getEditarAdministrador);
subrouter.get('/editar-administrador', gestionUserController.postEditarAdministrador);

subrouter.get('/', gestionUserController.get);
subrouter.post('/', gestionUserController.post);

module.exports = subrouter;
