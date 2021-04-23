const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Terapeuta = require('../models/terapeutas');
const Usuario_Rol = require('../models/usuarios_roles');
const Rol = require('../models/roles');

const arrows = Arrow.fetchAll();
const usuarios = Usuario.fetchAll();
const terapeutas = Terapeuta.fetchAll();
const usuarios_roles = Usuario_Rol.fetchAll();
const roles = Rol.fetchAll();

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
    usuario.save()
        .then(() => {
            for (let rol of request.body.selRol){
                var usuario_rol = new Usuario_Rol(request.body.correo, rol);
                usuario_rol.save()
                    .then(() => {
                        if (rol === '2'){ 
                            const terapeuta = new Terapeuta(request.body.correo, request.body.titulo, 'NULL','A');
                            terapeuta.save()
                                .then(() => {
                                }).catch( err => {
                                    console.log(err);
                                    response.redirect('/gestionAdmin/');    
                                }); 
                        }  
                        console.log("Todo cool");            
                    }).catch( err => {
                        console.log(err);
                        response.redirect('/gestionAdmin/');    
                    });
                }
                response.redirect('/gestionAdmin/gestionUsuarios/'); 
        }).catch( err => {
            console.log(err);
            response.redirect('/gestionAdmin/');    
        });
});

