const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Terapeuta = require('../models/terapeutas');
const Usuario_Rol = require('../models/usuarios_roles');
const Rol = require('../models/roles');

const arrows = Arrow.fetchAll();

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
    var apellidoP, apellidoM;
    apellidoP = request.body.apellidoP === ''? null :  request.body.apellidoP;
    apellidoM = request.body.apellidoM === ''? null :  request.body.apellidoM;
    const usuario = new Usuario(request.body.correo, 'contraseña', request.body.nombre, apellidoP, apellidoM);
    usuario.save()
        .then(() => {
            for (let rol of request.body.selRol){
                var usuario_rol = new Usuario_Rol(request.body.correo, rol);
                usuario_rol.save()
                    .then(() => {
                        if (rol === '2'){ 
                            var cv, titulo;
                            cv = request.body.cv === ''? null :  request.body.cv;
                            titulo = request.body.cv === ''? null :  request.body.titulo;
                            const terapeuta = new Terapeuta(request.body.correo, titulo,  cv, 'A');
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
            response.redirect('/gestionAdmin/gestionUsuarios/'); 
        }).catch( err => {
            console.log(err);
            response.redirect('/gestionAdmin/');    
        });
});

