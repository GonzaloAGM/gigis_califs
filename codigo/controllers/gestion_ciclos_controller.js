const Arrow = require('../models/arrow');

const arrows = Arrow.fetchAll();

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


exports.getInsGrupo = (request,response,next) => {
    response.render('gc_inscribir', {
        tituloDeHeader: "Inscribir participantes",
        tituloBarra: "Inscribir participantes en Lectura",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionCiclos'},
        forwArrow: arrows[1]
    });
};

exports.getAgrCiclo = (request,response,next) => {
    response.render('agregar_ciclo', {
        programas: programas,
        tituloDeHeader: "Nuevo ciclo",
        tituloBarra: "Nuevo ciclo",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionCiclos'},
        forwArrow: arrows[1]
    });
};

exports.getPerfilCiclo = (request,response,next) => {
    response.render('gestion_perfil_ciclo', {
        programas: programas,
        tituloDeHeader: "Ciclo EM-21",
        tituloBarra: "Ciclo enero - marzo 2021",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionCiclos'},
        forwArrow: arrows[1]
    });
};

exports.get = (request,response,next) => {
    response.render('gestion_ciclos', {
        ciclos_actuales: ciclos_actuales,
        ciclos_anteriores: ciclos_anteriores,
        tituloDeHeader: "Gestión de ciclos",
        tituloBarra: "Ciclos",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
};
