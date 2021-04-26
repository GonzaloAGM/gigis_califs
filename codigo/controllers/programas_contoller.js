const Grupo = require('../models/grupos');
const Programa = require('../models/programas');
const Arrow = require('../models/arrow');

const arrows = Arrow.fetchAll();

exports.getProgramas = (request, response, next) => {
  const idPrograma = request.params.id_programa;
  console.log(idPrograma + ': -----------------------------------------------');
  Grupo.fethcGruposProgramaActual(idPrograma)
    .then(([grupos, fieldData1]) => {
      console.log(grupos);
      let idGrupos = [];
      for (grupo of grupos) {
        idGrupos.push(grupo.idGrupos);
        console.log(grupo.idGrupo);
      }
      console.log(idGrupos);
      response.render('programas_programa1', {
        tituloDeHeader: grupos[0].nombrePrograma,
        tituloBarra: grupos[0].nombrePrograma,
        grupos: grupos,
        objetivos: [],
        backArrow: { display: 'block', link: '/programas' },
        forwArrow: arrows[1],
      });
    })
    .catch((err) => console.log(err));
};

exports.postProgramas = (request, response, next) => {
  console.log("Peticion asincrona recibida");
  console.log(request.body);
  console.log(request.body.programa_id);
  

  response.status(200).json({message: "respuesta asincrona"});

};

exports.get = (request, response, next) => {
  Programa.fetchProgramasCicloActual()
    .then(([programas, fieldData1]) => {
      Grupo.fetchGruposCicloActual()
        .then(([grupos, fieldData2]) => {
          response.render('programas', {
            tituloDeHeader: 'Programas',
            tituloBarra: 'Programas',
            programas: programas,
            grupos: grupos,
            backArrow: arrows[0],
            forwArrow: arrows[1],
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
