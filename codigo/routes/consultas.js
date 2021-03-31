const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

const programasConsutas = [
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
];

const carrouselTarj = [
    {
        color: 'red',
        numLink: '#one!'
    },
    {
        color: 'blue',
        numLink: '#two!'
    },
    {
        color: 'green',
        numLink: '#three!'
    },
    {
        color: 'yellow',
        numLink: '#four!'
    }
];

let estadoConsulta = 1;

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/Resultados', (request, response, next) => {
    response.render('consultasResultados', {
        tituloDeHeader: "Consulta - Resultados",
        tituloBarra: "Resultados de consulta",
        resultado: estadoConsulta
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
    response.render('consultas', {
        tituloDeHeader: "Consultas",
        tituloBarra: "Consultas",
        carrouselTarj: carrouselTarj,
        programasConsutas: programasConsutas,
        numProg: programasConsutas.length
    });
    console.log("Consultas Resultados por programa");
    response.status(201);
});

/* //Este POST es para fechas y filtrar programas
router.post('/', (request, response, next) => {
    console.log("Accion post en consultas");
    response.redirect('Consultas/Resultados');
    response.status(302);
});
*/

//Este POST es para filtrar los resultados de los programas existentes
router.post('/', (request, response, next) => {
    console.log("Accion post en consultas");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

module.exports = router;