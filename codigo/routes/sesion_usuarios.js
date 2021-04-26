//Dependencias
const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/sesion_usuarios_Controller');

router.get('/logout',usuariosController.logout);

module.exports = router;