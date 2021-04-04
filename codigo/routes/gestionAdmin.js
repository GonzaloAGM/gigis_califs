const express = require('express');
const router = express.Router();

const path = require('path');
const bodyParser = require('body-parser');

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
];

const tabGestion = [
    {
        nombre: 'GESTIÓN DE USUARIOS',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-usuarios'
    },
    {
        nombre: 'GESTIÓN DE PARTICIPANTES',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-participantes'
    },
    {
        nombre: 'GESTIÓN DE PROGRAMAS',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-programas'
    },
    {
        nombre: 'GESTION DE CICLOS',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-ciclos'
    }
];

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/gestion-usuarios', (request,response,next) => {
    response.render('gestion_usuarios', {
        tituloDeHeader: "Gestión de usuarios",
        tituloBarra: "Usuarios",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-participantes', (request,response,next) => {
    response.render('gestion_participantes', {
        tituloDeHeader: "Gestión de participantes",
        tituloBarra: "Participantes",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-programas', (request,response,next) => {
    response.render('gestion_programas', {
        tituloDeHeader: "Gestión de programas",
        tituloBarra: "Programas",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-ciclos', (request,response,next) => {
    response.render('gestion_ciclos', {
        tituloDeHeader: "Gestión de ciclos",
        tituloBarra: "Ciclos",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/', (request,response,next) => {
    response.render('gestion_administrativa', {
        tabGestion: tabGestion, 
        tituloDeHeader: "Gestión Administrativa",
        tituloBarra: "Gestión administrativa",
        backArrow: arrows[0],
        forwArrow: arrows[1]
    });
});

module.exports = router;