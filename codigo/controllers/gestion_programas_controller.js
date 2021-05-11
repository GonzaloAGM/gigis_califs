const Objetivo = require('../models/objetivos');
const Arrow = require('../models/arrow');
const Programa = require('../models/programas');
const Nivel = require('../models/niveles');
const arrows = Arrow.fetchAll();

exports.nivelObjetivos = (request, response, next) => {
  console.log(request.params.nivel_id);
  Nivel.fetchNombrePrograma(request.params.nivel_id)
    .then(([programa,fieldData]) => {
      Objetivo.objetivosPorNivel(request.params.nivel_id)
      .then(([objetivos, fieldData2]) =>{
        const tituloBarra = programa[0].nombrePrograma + ' - Nivel: ' + programa[0].nombreNivel;
        response.render('objetivos', {
          tituloDeHeader: 'Objetivos',
          tituloBarra: tituloBarra,
          idNivel: request.params.nivel_id,
          objetivos: objetivos,
          backArrow: { display: 'block', link: '/gestionAdmin/gestionProgramas' },
          forwArrow: arrows[1],
        });
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
};

exports.registrarObjetivo = (request, response, next) => {
  console.log(request.body);
  const nuevo = new Objetivo(request.body.idNivel, request.body.descripcion);
  nuevo.save()
    .then(() => {
      response.redirect('./' + request.body.idNivel);
    }).catch((err) => {
      console.log(err);
    });
};

exports.get = (request, response, next) => {
  Programa.fetchAll()
    .then(([programas, fieldData]) => {
      Nivel.fetchAll()
        .then(([niveles, fieldData2]) => {
          response.render('gestion_programas', {
            tituloDeHeader: 'Gestión de programas',
            tituloBarra: 'Programas',
            programas: programas,
            niveles: niveles,
            backArrow: { display: 'block', link: '/gestionAdmin' },
            forwArrow: arrows[1],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postNuevoPrograma = (request, response, next) => {
  const programa = new Programa(request.body.nombreProgra, request.body.puntajeMax,request.file.path);
  programa.save()
    .then(() => {
      Programa.fetchIdPrograma(request.body.nombreProgra)
        .then(([rows, fieldData]) => {
          const nivel = new Nivel(request.body.nivelBase, rows[0].idPrograma);
          nivel.save()
            .then(() => {
              response.redirect('/gestionAdmin/gestionProgramas');
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log('Accion post en gestionProgramas');
};

exports.editarPrograma  = (request, response, next) => {
  Programa.editarPrograma(request.body.idPrograma, request.body.nombrePrograma, request.file.path)
    .then(() => {
      response.redirect('./')
    }).catch((err) => {
      console.log(err);
    });
}

exports.agregarNivel = (request, response, next) => {
  const nuevoNivel = new Nivel(request.body.nombreNivel, request.body.idPrograma);
  nuevoNivel.save()
    .then(() => {
      response.redirect('./')
    }).catch((err) => {
      console.log(err);
    });
}