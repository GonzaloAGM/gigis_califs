const express = require('express');
const router = express.Router();

const path = require('path');
const bodyParser = require('body-parser');

const rutasGestionProgramas = require('./gestionProgramas');
const rutasGestionParticipantes = require('./gestionParticipantes');
const rutasGestionUsuarios = require('./gestionUsuarios');
//const rutasGestionCiclos = require('./gestionCiclos');

const Arrow = require('../models/arrow');
const Usuario = require('../models/usuario');
const Rol = require('../models/rol');
const TableroGestion = require('../models/tablero_gestion');

const arrows = Arrow.fetchAll();
const usuario = Usuario.fetchAll();
const rol = Rol.fetchAll();
const tabGestion = TableroGestion.fetchAll();

const ciclos_actuales = [
    {
        nombre:     'Enero-Marzo',
        anio:       '2021',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2021',
        ruta:       './gestion-perfil-ciclo'
    }    
];

const ciclos_anteriores = [
    {
        nombre:     'Enero-Marzo',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    } ,   
    {
        nombre:     'Julio-Septiembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Octubre-Diciembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },  
    {
        nombre:     'Enero-Marzo',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Julio-Septiembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Octubre-Diciembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Enero-Marzo',
        anio:       '2019',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2019',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Julio-Septiembre',
        anio:       '2019',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Octubre-Diciembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
     
];

const programas = [
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel:  [1,2],
        referencia: './inscribir-en-grupo'
    },
    {
        nombre: 'Sensorial',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel:  [1,2],
        referencia: './inscribir-en-grupo'
    },
    {
        nombre: 'Escritura',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel:  [1,2,3],
        referencia: './inscribir-en-grupo'
    },
    {
        nombre: 'Ballet',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel: [1],
        referencia: './inscribir-en-grupo'
    },
    {
        nombre: 'Matemáticas',
        ciclo: 'EM2020',
        promedio: 'X',
        nivel: [1,2,3],
        referencia: './inscribir-en-grupo'
    }

];

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use('/gestionUsuarios', rutasGestionUsuarios);

router.use('/gestionParticipantes', rutasGestionParticipantes);

router.use('/gestionProgramas', rutasGestionProgramas);

//router.use('/gestionciclos', rutasGestionCiclos);


router.get('/inscribir-en-grupo', (request,response,next) => {
    response.render('gc_inscribir', {
        tituloDeHeader: "Inscribir participantes",
        tituloBarra: "Inscribir participantes en Lectura",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-ciclos'},
        forwArrow: arrows[1]
    });
});
router.get('/agregar-ciclo', (request,response,next) => {
    response.render('agregar_ciclo', {
        tituloDeHeader: "Nuevo ciclo",
        tituloBarra: "Nuevo ciclo",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-ciclos'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-perfil-ciclo', (request,response,next) => {
    response.render('gestion_perfil_ciclo', {
        programas: programas,
        tituloDeHeader: "Ciclo EM-21",
        tituloBarra: "Ciclo enero - marzo 2021",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-ciclos'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-ciclos', (request,response,next) => {
    response.render('gestion_ciclos', {
        ciclos_actuales: ciclos_actuales,
        ciclos_anteriores: ciclos_anteriores,
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