const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionUserController = require('../controllers/gestion_usuarios_controller')


subrouter.get('/', gestionUserController.get);
subrouter.post('/', gestionUserController.postNuevoUsuario);

module.exports = subrouter;
