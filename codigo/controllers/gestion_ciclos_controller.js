const Arrow = require('../models/arrow');
const Ciclo = require('../models/ciclos');

const arrows = Arrow.fetchAll();
const mes = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril', 
    'Mayo',
    'Junio',
    'Julio', 
    'Agosto',
    'Septiembre', 
    'Octubre', 
    'Noviembre',
    'Diciembre'
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
    Ciclo.fetchAll()
        .then(([ciclos, fieldData1]) => {
            Ciclo.fetchCiclosAnioActual()
                .then(([ciclos_aactual, fieldData1]) => {
                    Ciclo.fetchAniosPasados()
                        .then(([a_pasados, fieldData1]) => {
                            response.render('gestion_ciclos', {
                                ciclos: ciclos,
                                a_pasados:a_pasados,
                                ciclos_aactual: ciclos_aactual,
                                mes: mes,
                                tituloDeHeader: "Gestión de ciclos",
                                tituloBarra: "Ciclos",
                                backArrow: {display: 'block', link: '/gestionAdmin'},
                                forwArrow: arrows[1]
                            });
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
