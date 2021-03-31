const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/Resultados', (request, response, next) => {
    response.render('consultasResultados', {
        tituloDeHeader: "Resultados de Consulta"
    });
    console.log("Consultas Resultados");
    response.status(201);
});

router.post('/Resultados', (request, response, next) => {
    console.log("Accion post en resultados");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

router.get('/Resultados/ProgramaN', (request, response, next) => {
    response.render('consultasResultados', {
        tituloDeHeader: "Resultados Programa N"
    });
    console.log("Consultas Resultados por programa");
    response.status(201);
});

router.post('/Resultados/ProgramaN', (request, response, next) => {
    console.log("Accion post en resultados por programa");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

router.get('/', (request, response, next) => {
    response.render('Consultas', {
        tituloDeHeader: "Consultas"
    });
    console.log("Consultas Resultados por programa");
    response.status(201);
});

router.post('/', (request, response, next) => {
    console.log("Accion post en consultas");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

module.exports = router;