const Arrow = require('../models/arrow');
const Usuario = require('../models/usuario');
const Rol = require('../models/rol');

const arrows = Arrow.fetchAll();
const usuarios = Usuario.fetchAll();
const roles = Rol.fetchAll();

exports.getPerfilTerapeuta = ((request,response,next) => {
    response.render('perfil_terapeuta', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil terapeuta",
        tituloBarra: "Marcela",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios'},
        forwArrow: arrows[1]
    });
});

exports.getEditarTerapeuta = ((request,response,next) => {
    response.render('editar_terapeuta', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Editar terapeuta",
        tituloBarra: "Terapeuta",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios/perfil-terapeuta'},
        forwArrow: arrows[1]
    });
});

//exports.postEditarTerapeuta = ((request,response,next) => {
//});

exports.getCrearTerapeuta = ((request,response,next) => {
    response.render('crear_terapeuta', {
        tituloDeHeader: "Nuevo terapeuta",
        tituloBarra: "Nuevo terapeuta",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios'},
        forwArrow: arrows[1]
    });
});

//exports.postCrearTerapeuta = ((request,response,next) => {
//});

exports.getPerfilGestor = ((request,response,next) => {
    response.render('perfil_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil gestor",
        tituloBarra: "Gestor",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios'},
        forwArrow: arrows[1]
    });
});

exports.getEditarGestor = ((request,response,next) => {
    response.render('editar_usuario', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Editar gestor",
        tituloBarra: "Gestor",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios/perfil-gestor'},
        forwArrow: arrows[1]
    });
});

//exports.postEditarGestor = ((request,response,next) => {
    
//});

exports.getPerfilAdministrador = ((request,response,next) => {
    response.render('perfil_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil administrador",
        tituloBarra: "Administrador",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios'},
        forwArrow: arrows[1]
    });
});

exports.getEditarAdministrador = ((request,response,next) => {
    response.render('editar_usuario', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Editar administrador",
        tituloBarra: "Administrador",
        backArrow: {display: 'block', link: '/gestionAdmin/gestionUsuarios/perfil-administrador'},
        forwArrow: arrows[1]
    });
});

//exports.postEditarAdministrador = ((request,response,next) => {
    
//});

exports.get = ((request,response,next) => {
    response.render('gestion_usuarios', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Gestión de usuarios",
        tituloBarra: "Usuarios",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

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
