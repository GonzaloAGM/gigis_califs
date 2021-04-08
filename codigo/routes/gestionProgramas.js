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
        nombre:     'Cocina',
        niveles:  [
            {
                nombre: 'Nivel 1',
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
                nombre: 'Nivel 1',
            }
        ],
    },
    {
        nombre:     'Terapia sensorial',
        niveles:  [
            {
                nombre: 'Nivel 1',
            }
        ],
    }    
];

const objetivos = [
    {
        nivel:          '1',
        numero:         '1', 
        descripcion:    'Balbucea'
    },
    {
        nivel:          '1',
        numero:         '2', 
        descripcion:    'Emite ruidos con su garganta'
    },
    {
        nivel:          '1',
        numero:         '3', 
        descripcion:    'Hace pequeños ruidos cuando se le habla'
    },
    {
        nivel:          '1',
        numero:         '4', 
        descripcion:    'Crea sonidos relacionados con el placer y el dolor'
    },
    {
        nivel:          '1',
        numero:         '5', 
        descripcion:    'Sensibilidad ante el ruido'
    },
    {
        nivel:          '2',
        numero:         '1', 
        descripcion:    'Pronuncia vocales'
    },
    {
        nivel:          '2',
        numero:         '2', 
        descripcion:    'Comprende la palabra no'
    },
    {
        nivel:          '2',
        numero:         '3', 
        descripcion:    'Conoce y responde a su nombre'
    },
    {
        nivel:          '2',
        numero:         '4', 
        descripcion:    'Disfruta con las canciones'
    },
    {
        nivel:          '2',
        numero:         '5', 
        descripcion:    'Surge el laleo que son sonidos vocalicos y consonanticos'
    }
    
    
];

subrouter.use(bodyParser.urlencoded({ extended: false }))
subrouter.use(express.static(path.join(__dirname,'..', 'public')));

subrouter.get('/gestion-nivel-objetivos', (request,response,next) => {
    response.render('objetivos', {
        objetivos:objetivos,
        tituloDeHeader: "Objetivos",
        tituloBarra: "Objetivos de lenguaje nivel 1",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionProgramas'},
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
        nombre:     request.body.nombreProgra,
        niveles:
        [{
            nombre: request.body.nivelBase,
        }]
    });
    response.redirect('/gestionAdmin/gestionProgramas');
    console.log("Accion post en gestionProgramas");
});

module.exports = subrouter;