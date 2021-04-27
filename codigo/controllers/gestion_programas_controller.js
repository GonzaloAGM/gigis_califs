//Se eliminaran en un futuro
const ProgramasNiveles = require('../models/programa_niveles');
const Objetivos = require('../models/objetivo');
const programasNiveles = ProgramasNiveles.fetchAll();
const objetivos = Objetivos.fetchAll();

const Arrow = require('../models/arrow');
const Programa = require('../models/programas');
const Nivel = require('../models/niveles');
const arrows = Arrow.fetchAll();

//Falta actualizar
exports.getGpObjetivos = ((request,response,next) => {
    response.render('objetivos', {
        objetivos:objetivos,
        tituloDeHeader: "Objetivos",
        tituloBarra: "Lenguaje nivel prelingüístico",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionProgramas'},
        forwArrow: arrows[1]
    });
});

//Falta actualizar
exports.postGpObjetivos = ((request,response,next) => {
    const objetivo = new Objetivos(1,6,request.body.descripcionObj);
    objetivo.save();
    response.redirect('/gestionAdmin/gestionProgramas/gestion-nivel-objetivos');
    console.log("Accion post en gestionProgramasObjs");
});

//Falta actualizar
exports.get = ((request,response,next) => {
    response.render('gestion_programas', {
        programas:      programasNiveles,
        tituloDeHeader: "Gestión de programas",
        tituloBarra:    "Programas",
        backArrow:      {display: 'block', link: '/gestionAdmin'},
        forwArrow:      arrows[1]
    });
});

//Falta actualizar
exports.postNuevoPrograma = ((request,response,next) => {
    /*const niveleBase =
    [{
        nombre: request.body.nivelBase,
    }];
    const programaNivel = new ProgramasNiveles(request.body.nombreProgra, niveleBase)
    programaNivel.save();
    */
    const programa = new Programa(request.body.nombreProgra, request.body.puntajeMax, null)
    
    programa.save()
        .then(() => {
            Programa.fetchIdPrograma(request.body.nombreProgra)
                .then(([rows,fieldData]) =>{
                    const nivel = new Nivel (request.body.nivelBase, rows[0].idPrograma)
                    nivel.save()
                        .then(() => {
                            response.redirect('/gestionAdmin/gestionProgramas');
                        }).catch( err => {
                            console.log(err);
                        });
                }).catch( err => {
                    console.log(err);
                });
        }).catch( err => {
            console.log(err);
        });
    console.log("Accion post en gestionProgramas");
});