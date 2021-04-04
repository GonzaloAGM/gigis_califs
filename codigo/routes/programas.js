const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
];

const programas = [
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel:  [1,2]
    },
    {
        nombre: 'Sensorial',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel:  [1,2]
    },
    {
        nombre: 'Escritura',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel:  [1,2,3]
    },
    {
        nombre: 'Ballet',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel: [1]
    },
    {
        nombre: 'Matemáticas',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel: [1,2,3,4]
    }

];

router.use(bodyParser.urlencoded({ extended: false }))

router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/programa1', (request,response,next) => {
    response.render('programas_programa1', {
        tituloDeHeader: "Programa 1",
        tituloBarra: "Programa 1",
        backArrow: {display: 'block', link: '/programas'},
        forwArrow: arrows[1]
    });
});

router.get('/', (request,response,next) => {
    response.render('programas', {
        tituloDeHeader: "Programas",
        tituloBarra: "Programas",
        programas: programas,
        backArrow: arrows[0],
        forwArrow: arrows[1]
    });
});

module.exports = router;