const Programa = require('../models/programas');
const Grupo = require('../models/grupos');
const Arrow = require('../models/arrow');
const Objetivo = require('../models/objetivos');
const Ciclo = require('../models/ciclos');

const programas = Programa.fetchAll();
const arrows = Arrow.fetchAll();
const grupos = Grupo.fetchAll();
const objetivos = Objetivo.fetchAll();

exports.programaGateo = (request,response,next) => {
    const gruposGateo = [];
    for (grupo of grupos){
        if (grupo.nombre === 'Gateo y caminata')
            gruposGateo.push(grupo);
    }

    response.render('programas_programa1', {
        tituloDeHeader: gruposGateo[0].nombre,
        tituloBarra: gruposGateo[0].nombre,
        grupos: gruposGateo,
        objetivos: objetivos,
        backArrow: {display: 'block', link: '/programas'},
        forwArrow: arrows[1]
    });
}

exports.programaCocina = (request,response,next) => {
    const gruposCocina = [];
    for (grupo of grupos){
        if (grupo.nombre === 'Cocina')
            gruposCocina.push(grupo);
    }
    response.render('programas_programa1', {
        tituloDeHeader: gruposCocina[0].nombre,
        tituloBarra: gruposCocina[0].nombre,
        grupos: gruposCocina,
        objetivos: objetivos,
        backArrow: {display: 'block', link: '/programas'},
        forwArrow: arrows[1]
    });
}

exports.programaLectura = (request,response,next) => {
    const gruposLectura = [];
    for (grupo of grupos){
        if (grupo.nombre === 'Lectura')
            gruposLectura.push(grupo);
    }
    response.render('programas_programa1', {
        tituloDeHeader: gruposLectura[0].nombre,
        tituloBarra: gruposLectura[0].nombre,
        grupos: gruposLectura,
        objetivos:objetivos,
        backArrow: {display: 'block', link: '/programas'},
        forwArrow: arrows[1]
    });
}

exports.get = (request,response,next) => {
    Ciclo.fetchIdCiclo('2020-10-30')
        .then(([rows, fieldData]) => {
            console.log(rows);
        })
        .catch(err => {
            console.log(err);
        });
    response.render('programas', {
        tituloDeHeader: "Programas",
        tituloBarra: "Programas",
        programas: programas,
        backArrow: arrows[0],
        forwArrow: arrows[1]
    });
}