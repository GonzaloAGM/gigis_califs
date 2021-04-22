const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Usuario_Rol = require('../models/usuarios_roles');
const Rol = require('../models/roles');

const arrows = Arrow.fetchAll();
const usuarios = Usuario.fetchAll();
const usuarios_roles = Usuario_Rol.fetchAll();
const roles = Rol.fetchAll();

exports.getCrearTerapeuta = ((request,response,next) => {
    response.render('crear_terapeuta', {
        tituloDeHeader: "Nuevo terapeuta",
        tituloBarra: "Nuevo terapeuta",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios'},
        forwArrow: arrows[1]
    });
});

exports.get = (request, response, next) => {
    Usuario.fetchListaSin('participante')
        .then(([usuarios, fieldData1]) => {
            Rol.fetchAll()
                .then(([roles, fieldData2]) => {
                    response.render('gestion_usuarios', {
                        usuarios: usuarios, 
                        roles: roles, 
                        tituloDeHeader: "Gestión de usuarios",
                        tituloBarra: "Usuarios",
                        backArrow: {display: 'block', link: '/gestionAdmin'},
                        forwArrow: arrows[1]
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
    
exports.postNuevoUsuario = ((request,response,next) => {
    const usuario = new Usuario(request.body.correo, 'contraseña', request.body.nombre, request.body.apellidoP, request.body.apellidoM);
    const usuario_rol = new Usuario_Rol(request.body.correo, request.body.selRol);
    usuario.save()
        .then(() => {
            usuario_rol.save()
                .then(() => {
                    if (request.body.selRol === '2')                
                        response.redirect('/gestionAdmin/gestionUsuarios/crear-terapeuta'); 
                    else
                        response.redirect('/gestionAdmin/gestionUsuarios/');  
                }).catch( err => {
                    console.log(err);
                    response.redirect('/gestionAdmin/');    
                });
        }).catch( err => {
            console.log(err);
            response.redirect('/gestionAdmin/');    
        });
});

