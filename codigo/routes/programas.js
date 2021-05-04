const express = require('express');
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, '..', 'public')));

const programasController = require('../controllers/programas_contoller');

router.post('/registro-puntajes', programasController.registroPuntajes);
router.get('/:id_programa', programasController.getProgramas);
router.post('/objetivos-participante', programasController.objetivosParticipantes);
router.get('/', programasController.get);

module.exports = router;
