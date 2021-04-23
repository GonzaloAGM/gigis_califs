const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Participante = require('../models/participantes');

const arrows = Arrow.fetchAll();
const usuarios = Usuario.fetchAll();
const participantes = Participante.fetchAll();


exports.getEditPartic = ((request,response,next) => {
    response.render('editar_participante', {
        tituloDeHeader: "Editar participante",
        tituloBarra: "Editar participante",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionParticipantes'},
        forwArrow: arrows[1]
    });
});

exports.postEditPartic = ((request,response,next) => {
    response.redirect('/gestionAdmin/gestionParticipantes/perfil-participante');
    // Aquí se updatearía
    console.log("Accion post en gestionPartcipantesEdit");
});

exports.getPerfilPartic = ((request,response,next) => {
    response.render('perfil_participante', {
        tituloDeHeader: "Perfil participante",
        tituloBarra: "Adriana Guadalupe",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionParticipantes'},
        forwArrow: arrows[1]
    });
});

exports.get = ((request,response,next) => {
    Participante.fetchAll('participante')
        .then(([participantes, fieldData1]) => {
            response.render('gestion_participantes', {
                participantes: participantes,
                tituloDeHeader: "Gestión de participantes",
                tituloBarra: "Participantes",
                backArrow: {display: 'block', link: '/gestionAdmin'},
                forwArrow: arrows[1]
            });
        })
        .catch((err) => console.log(err));
});

exports.post = ((request,response,next) => {
    const participantee = new Participante(request.body.nombre, request.body.apellidoP, request.body.apellidoM, 'Activo', './editar-participante', './perfil-participante');
    participantee.save();
    response.redirect('/gestionAdmin/gestionParticipantes');
});

