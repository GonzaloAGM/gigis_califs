const Arrow = require('../models/arrow');
const ProgramasNiveles = require('../models/programa_niveles');
const Objetivos = require('../models/objetivo');

const programasNiveles = ProgramasNiveles.fetchAll();
const arrows = Arrow.fetchAll();
const objetivos = Objetivos.fetchAll();

exports.getGpObjetivos = ((request,response,next) => {
    response.render('objetivos', {
        objetivos:objetivos,
        tituloDeHeader: "Objetivos",
        tituloBarra: "Lenguaje nivel prelingüístico",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionProgramas'},
        forwArrow: arrows[1]
    });
});

exports.postGpObjetivos = ((request,response,next) => {
    const objetivo = new Objetivos(1,6,request.body.descripcionObj);
    objetivo.save();
    response.redirect('/gestionAdmin/gestionProgramas/gestion-nivel-objetivos');
    console.log("Accion post en gestionProgramasObjs");
});

exports.get = ((request,response,next) => {
    response.render('gestion_programas', {
        programas:      programasNiveles,
        tituloDeHeader: "Gestión de programas",
        tituloBarra:    "Programas",
        backArrow:      {display: 'block', link: '/gestionAdmin'},
        forwArrow:      arrows[1]
    });
});

exports.post = ((request,response,next) => {
    const niveleBase =
    [{
        nombre: request.body.nivelBase,
    }];
    const programaNivel = new ProgramasNiveles(request.body.nombreProgra, niveleBase)
    programaNivel.save();
    response.redirect('/gestionAdmin/gestionProgramas');
    console.log("Accion post en gestionProgramas");
});