const express = require('express');
const subrouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

const gestionUserController = require('../controllers/gestion_usuarios_controller')
const isAuth = require('../util/is-auth.js');



subrouter.get('/', isAuth, gestionUserController.get);                  //Quitar isAuth para registrar sus usuarios
subrouter.post('/', isAuth, gestionUserController.postNuevoUsuario);    //Quitar isAuth para registrar sus usuarios
                                                                        //y tambien revisar router de gestion administrativa
module.exports = subrouter;