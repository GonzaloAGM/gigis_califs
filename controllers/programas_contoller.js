const Grupo = require('../models/grupos');
const Programa = require('../models/programas');
const Arrow = require('../models/arrow');
const Participante_Grupo_Objetivo = require('../models/participantes_grupos_objetivos');
const Usuario = require('../models/usuarios')
const arrows = Arrow.fetchAll();

exports.getProgramas = (request, response, next) => {
  const idPrograma = request.params.id_programa;
  Programa.fetchNombreProgama(idPrograma)
    .then(([programa, fieldData]) => {
      Grupo.fethcGruposProgramaActual(idPrograma)
      .then(([grupos, fieldData1]) => {
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

exports.objetivosParticipantes = (request, response, next) => {
  Participante_Grupo_Objetivo.fetchObjetivosPorParticipante(request.body.grupo_id,request.body.login_participante)
    .then(([objetivos, fieldData]) => {
      Grupo.fetchIdPrograma(request.body.grupo_id)
        .then(([programa,fieldData2]) => {
          return response.status(200).json({ 
            objetivos: objetivos,
            programa: programa,
            grupo: request.body.grupo_id,
            participante: request.body.login_participante
          });
        }).catch((err) => { 
          console.log(err);
          return response.status(500).json({message: "Internal Server Error"});
      })
    }).catch((err) => { 
        console.log(err);
        return response.status(500).json({message: "Internal Server Error"});
    })
};

exports.registroPuntajes = (request, response, next) => {
  for (participante of request.body){
    Participante_Grupo_Objetivo.ActualizarPuntajes(participante.login, participante.idGrupo, participante.idObjetivo, participante.pInicial, participante.pFinal)
      .then(() =>{

      }).catch((err) => {
        console.log(err);
        return response.status(500).json({message: "Internal Server Error"});
    })
  }
  Usuario.fetchNombre(request.body[0].login)
    .then(([nombre,fieldData]) => {
      return response.status(200).json({
        nombre: nombre,
        grupo: request.body[0].idGrupo
      });
    }).catch((err) => {
          console.log(err);
          return response.status(500).json({message: "Internal Server Error"});
      })
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
