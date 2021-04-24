const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Participante = require('../models/participantes');
const Usuario_Rol = require('../models/usuarios_roles');

const arrows = Arrow.fetchAll();
const usuarios = Usuario.fetchAll();
const participantes = Participante.fetchAll();
const usuarios_roles = Usuario_Rol.fetchAll();


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
    const participante = new Participante(request.body.correo, 'contra', request.body.nombre, request.body.apellidoP, request.body.apellidoM, 'A', request.body.sexo, request.body.fechaN, '5', request.body.tel);
    participante.save()
        .then(() => {
            const usuario_rol = new Usuario_Rol(request.body.correo, '1');
            usuario_rol.save()
                .then(() => {
                    console.log('Todo ok');
                    response.redirect('/gestionAdmin/gestionParticipantes');         
                }).catch( err => {
                    console.log(err);
                    response.redirect('/gestionAdmin/');    
                });
        }).catch( err => {
            console.log(err);
            console.log('Noentra al 1er then');
            response.redirect('/gestionAdmin/');    
        });
});

