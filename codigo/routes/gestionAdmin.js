const express = require('express');
const router = express.Router();

const path = require('path');
const bodyParser = require('body-parser');

const gestionAdminController = require('../controllers/gestion_admin_controller')

const rutasGestionProgramas = require('./gestionProgramas');
const rutasGestionParticipantes = require('./gestionParticipantes');
const rutasGestionUsuarios = require('./gestionUsuarios');
const rutasGestionCiclos = require('./gestionCiclos');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use('/gestionUsuarios', rutasGestionUsuarios);

router.use('/gestionParticipantes', rutasGestionParticipantes);

router.use('/gestionProgramas', rutasGestionProgramas);

router.use('/gestionciclos', rutasGestionCiclos);

router.get('/', gestionAdminController.get);

module.exports = router;