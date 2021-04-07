const express = require('express');
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

const programasController = require('../controllers/programas_contoller')

router.get('/gateo-y-caminata-grupo-1', programasController.programaGateo1);
router.get('/gateo-y-caminata-grupo-2', programasController.programaGateo2);
router.get('/cocina-grupo-1', programasController.programaCocina1);
router.get('/lectura-grupo-1', programasController.programaLectura1);
router.get('/lectura-grupo-2', programasController.programaLectura2);


router.get('/', programasController.get);
module.exports = router;