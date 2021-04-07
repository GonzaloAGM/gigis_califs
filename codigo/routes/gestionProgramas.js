const express = require('express');
const subrouter = express.Router();

const path = require('path');
const bodyParser = require('body-parser');

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
];


const programas = [
    {
        nombre:     'Cocina',
        niveles:  [
            {
                nombre: 'Nivel 0',
            }
        ],
    },
    {
        nombre:     'Lenguaje',
        niveles:  [
            {
                nombre: 'Prelingüístico',
            },
            {
                nombre: 'Básico',
            },
            {
                nombre: 'Intermedio',
            },
            {
                nombre: 'Avanzado',
            }
        ],
    },
    {
        nombre:     'Lectura',
        niveles:  [
            {
                nombre: 'Nivel 1',
            },
            {
                nombre: 'Nivel 2',
            },
            {
                nombre: 'Nivel 3',
            }
        ],
    },
    {
        nombre:     'Soy productivo',
        niveles:  [
            {
                nombre: 'Nivel 0',
            }
        ],
    },
    {
        nombre:     'Terapia sensorial',
        niveles:  [
            {
                nombre: 'Nivel 0',
            }
        ],
    }    
];

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

subrouter.get('/nuevo-programa', (request,response,next) => {
    response.render('nuevo_programa', {
        tituloDeHeader: "No sé",
        tituloBarra: "Tampoco sé",
        backArrow: {display: 'block', link: '/gestionProgramas'},
        forwArrow: arrows[1]
    });
});
subrouter.get('/', (request,response,next) => {
    response.render('gestion_programas', {
        programas: programas,
        tituloDeHeader: "Gestión de programas",
        tituloBarra: "Programas",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});
subrouter.post('/', (request,response,next) => {
    programas.push({
        nombre: request.body.nombreProgra,
    });
    programas.niveles.push({
        nombre: request.body.nivelBase
    });
    response.redirect('/gestionProgramas');
    console.log("Accion post en gestionProgramas");
});

module.exports = subrouter;