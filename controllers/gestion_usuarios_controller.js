const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Terapeuta = require('../models/terapeutas');
const Usuario_Rol = require('../models/usuarios_roles');
const Rol = require('../models/roles');

const arrows = Arrow.fetchAll();

exports.get = (request, response, next) => {
    const error = request.session.error === undefined ? false : request.session.error;
    const bandera = request.session.bandera === undefined ? false : request.session.bandera;
    Usuario.fetchListaSin('participante')
        .then(([usuarios, fieldData1]) => {
            Rol.fetchAll()
                .then(([roles, fieldData2]) => {
                    response.render('gestion_usuarios', {
                        usuarios: usuarios, 
                        roles: roles, 
                        error: error,
                        bandera: bandera,
                        tituloDeHeader: "Gestión de usuarios",
                        tituloBarra: "Usuarios",
                        backArrow: {display: 'block', link: '/gestionAdmin'},
                        forwArrow: arrows[1]
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    request.session.error = undefined;
    request.session.bandera =undefined;
};
    
exports.postNuevoUsuario = (request,response,next) => {
    let apellidoP = request.body.apellidoP === ''? null :  request.body.apellidoP;
    let apellidoM = request.body.apellidoM === ''? null :  request.body.apellidoM;
    const usuario = new Usuario(request.body.correo, request.body.contra, request.body.nombre, apellidoP, apellidoM);
    usuario.save()
        .then(() => {
            for (let rol of request.body.selRol){
                let usuario_rol = new Usuario_Rol(request.body.correo, rol);
                usuario_rol.save()
                    .then(() => {
                        if (rol === '2'){ 
                            const cv_path  = request.file.path === ''? null :  request.file.path;
                            const titulo = request.body.titulo === ''? null :  request.body.titulo;
                            const terapeuta = new Terapeuta(request.body.correo, titulo,  cv_path, 'A');
                            terapeuta.save()
                                .then(() => {
                                }).catch( err => {
                                    console.log(err);
                                    response.redirect('/gestionAdmin/');    
                                }); 
                        }             
                    }).catch( err => {
                        console.log(err);
                        response.redirect('/gestionAdmin/');    
                    });
            }
            request.session.error = undefined;
            request.session.bandera = true; 
            response.redirect('/gestionAdmin/gestionUsuarios/');
        }).catch( err => {
            console.log(err);
            request.session.error = "Ya existe un usuario registrado con el correo que ingresaste.";
            request.session.bandera =true; 
            response.redirect('/gestionAdmin/gestionUsuarios');    
        });
};

