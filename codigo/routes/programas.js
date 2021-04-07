const express = require('express');
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

const programasController = require('../controllers/programas_contoller')

router.get('/programa1', programasController.programa1);

router.get('/', programasController.get);

module.exports = router;