const Programa = require('../models/programas');
const Arrow = require('../models/arrow');
const programas = Programa.fetchAll();
const arrows = Arrow.fetchAll();

exports.programa1 = (request,response,next) => {
    response.render('programas_programa1', {
        tituloDeHeader: "Programa 1",
        tituloBarra: "Programa 1",
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