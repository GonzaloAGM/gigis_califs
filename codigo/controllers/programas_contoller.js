const Grupo = require('../models/grupos');
const Arrow = require('../models/arrow');

const arrows = Arrow.fetchAll();

exports.getProgramas = (request, response, next) => {
  const programa = request.params.nombre_programa;
  console.log(programa + ': -------------------------------------------------');
  Grupo.fethcGruposProgramaActual(programa)
    .then(([grupos, fieldData1]) => {
      console.log(grupos);

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

exports.get = (request, response, next) => {
  Grupo.fetchProgramasCicloActual()
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
