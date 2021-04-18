const Grupo = require('../models/grupos');
const Arrow = require('../models/arrow');

const arrows = Arrow.fetchAll();

exports.getProgramas = (request, response, next) => {
  const programa = request.params.nombre_programa;
  console.log(programa);
  Grupo.fethcGruposProgramaActual(programa)
    .then(([rows, fieldData1]) => {
      response.render('programas_programa1', {
        tituloDeHeader: rows[0].nombrePrograma,
        tituloBarra: rows[0].nombrePrograma,
        grupos: rows,
        objetivos: [],
        backArrow: { display: 'block', link: '/programas' },
        forwArrow: arrows[1],
      });
    })
    .catch((err) => console.log(err));
};

exports.get = (request, response, next) => {
  Grupo.fetchProgramasCicloActual()
    .then(([rows1, fieldData1]) => {
      Grupo.fetchGruposCicloActual()
        .then(([rows2, fieldData2]) => {
          response.render('programas', {
            tituloDeHeader: 'Programas',
            tituloBarra: 'Programas',
            programas: rows1,
            grupos: rows2,
            backArrow: arrows[0],
            forwArrow: arrows[1],
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
