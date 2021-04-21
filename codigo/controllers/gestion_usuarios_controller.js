const Arrow = require('../models/arrow');
const Usuario = require('../models/usuarios');
const Usuario_Rol = require('../models/usuarios_roles');
const Rol = require('../models/roles');

const arrows = Arrow.fetchAll();
const usuarios = Usuario.fetchAll();
const usuarios_roles = Usuario_Rol.fetchAll();
const roles = Rol.fetchAll();

exports.get = (request, response, next) => {
    Usuario.fetchSin('participante')
        .then(([usuarios, fieldData1]) => {
            Rol.fetchAll()
                .then(([roles, fieldData2]) => {
                    Usuario_Rol.fetchRolDeUnUsuario('participante') 
                        .then(([roldeusuarios, fieldData2]) => {
                            response.render('gestion_usuarios', {
                                usuarios: usuarios, 
                                roles: roles, 
                                roldeusuarios: roldeusuarios, 
                                tituloDeHeader: "Gestión de usuarios",
                                tituloBarra: "Usuarios",
                                backArrow: {display: 'block', link: '/gestionAdmin'},
                                forwArrow: arrows[1]
                            });
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};
    


/*exports.post = ((request,response,next) => {
    if (request.body.selRol === "1"){
        const usuario = new Usuario(request.body.nombre, request.body.rol, './editar-terapeuta', './perfil-terapeuta',);
        usuario.save();
    }
    else if (request.body.selRol === "2"){
        const usuario = new Usuario(request.body.nombre, request.body.rol,'./editar-administrador','./perfil-administrador');
        usuario.save();
    }
    else{
        const usuario = new Usuario(request.body.nombre, request.body.rol,'./editar-gestor','./perfil-gestor');
        usuario.save();
    }
    response.redirect('/');
});
*/
