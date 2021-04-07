const Programa = require('../models/programas');
const Grupo = require('../models/grupos');
const Arrow = require('../models/arrow');

const programas = Programa.fetchAll();
const arrows = Arrow.fetchAll();
const grupos = Grupo.fetchAll();

exports.programa1 = (request,response,next) => {
    response.render('programas_programa1', {
        tituloDeHeader: grupos[0].nombre,
        tituloBarra: grupos[0].nombre,
        grupo: grupos[0],
        backArrow: {display: 'block', link: '/programas'},
        forwArrow: arrows[1]
    });
}

exports.get = (request,response,next) => {
    response.render('programas', {
        tituloDeHeader: "Programas",
        tituloBarra: "Programas",
        programas: programas,
        backArrow: arrows[0],
        forwArrow: arrows[1]
    });
}