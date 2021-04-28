const Grupo = require('../models/grupos');
const Programa = require('../models/programas');
const Arrow = require('../models/arrow');
const Participante_Grupo_Objetivo = require('../models/participantes_grupos_objetivos');
const arrows = Arrow.fetchAll();

exports.getProgramas = (request, response, next) => {
  const idPrograma = request.params.id_programa;
  Programa.fetchNombreProgama(idPrograma)
    .then(([programa, fieldData]) => {
      Grupo.fethcGruposProgramaActual(idPrograma)
      .then(([grupos, fieldData1]) => {
        console.log(grupos);
        Participante_Grupo_Objetivo.fetchParticipantesPorPrograma(idPrograma)
          .then(([participantes,fieldData2]) => {
            response.render('programas_programa1', {
              tituloDeHeader: programa[0].nombrePrograma,
              tituloBarra: programa[0].nombrePrograma,
              grupos: grupos,
              participantes: participantes,
              backArrow: { display: 'block', link: '/programas' },
              forwArrow: arrows[1]
            });
          }).catch((err) => {
            console.log(err);
          })
      }).catch((err) => {
          console.log(err);
      })
    }).catch((err) => {
      console.log(err);
  })
};

exports.postProgramas = (request, response, next) => {
  console.log("Peticion asincrona recibida");
  console.log(request.body);
  console.log(request.body.programa_id);
  
  Grupo.fethcGruposProgramaActual(request.body.programa_id)
    .then(([grupos, fieldData]) => {
      console.log(grupos);
      Participante_Grupo_Objetivo.fetchParticipantesPorPrograma(request.body.programa_id)
        .then(([participantes,fieldData2]) => {
          return response.status(200).json({
            grupos: grupos,
            participantes: participantes
          });
        }).catch((err) => {
          console.log(err);
          return response.status(500).json({message: "Internal Server Error"});
        })
    }).catch((err) => {
        console.log(err);
        return response.status(500).json({message: "Internal Server Error"});
    })

  //response.status(200).json({message: "respuesta asincrona"});

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
