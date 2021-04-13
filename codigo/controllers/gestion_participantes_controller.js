const Arrow = require('../models/arrow');
const Participante = require('../models/participante');

const arrows = Arrow.fetchAll();
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
    response.render('gestion_participantes', {
        participantes: participantes,
        tituloDeHeader: "Gestión de participantes",
        tituloBarra: "Participantes",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

exports.post = ((request,response,next) => {
    const participantee = new Participante(request.body.nombre, request.body.apellidoP, request.body.apellidoM, 'Activo', './editar-participante', './perfil-participante');
    participantee.save();
    response.redirect('/gestionAdmin/gestionParticipantes');
});

