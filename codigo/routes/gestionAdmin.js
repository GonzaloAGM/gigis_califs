const express = require('express');
const router = express.Router();

const path = require('path');
const bodyParser = require('body-parser');

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
];

const tabGestion = [
    {
        nombre: 'GESTIÓN DE USUARIOS',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-usuarios'
    },
    {
        nombre: 'GESTIÓN DE PARTICIPANTES',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-participantes'
    },
    {
        nombre: 'GESTIÓN DE PROGRAMAS',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-programas'
    },
    {
        nombre: 'GESTION DE CICLOS',
        imagen: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg',
        ruta:   'gestion-ciclos'
    }
];

const usuarios = [
    {
        nombre:     'Marcela',
        rol:        'Terapeuta',
        rutaEditar: 'gestion-usuarios/editar-terapeuta',
        ruta:       'gestion-usuarios/perfil-terapeuta'
    },
    {
        nombre:     'Eva',
        rol:        'Gestor',
        rutaEditar: 'gestion-usuarios/editar-gestor',
        ruta:       'gestion-usuarios/perfil-gestor'
    },
    {
        nombre:     'Maye',
        rol:        'Administrador',
        rutaEditar: 'gestion-usuarios/editar-administrador',
        ruta:       'gestion-usuarios/perfil-administrador'
    },
    {
        nombre:     'Gabriela',
        rol:        'Terapeuta',
        rutaEditar: 'gestion-usuarios/editar-terapeuta',
        ruta:       'gestion-usuarios/perfil-terapeuta'
    },
    {
        nombre:     'Valentina',
        rol:        'Terapeuta',
        rutaEditar: 'gestion-usuarios/perfil-terapeuta',
        ruta:       'gestion-usuarios/gestion-usuarios'
    }
];

const roles = [
    {
        nombre:     'Terapeuta',
        valor:      '1',
    },
    {
        nombre:     'Administrador',
        valor:      '2',
    },
    {
        nombre:     'Gestor',
        valor:      '3',
    }
];

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/gestion-usuarios/perfil-terapeuta', (request,response,next) => {
    response.render('perfil_terapeuta', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil terapeuta",
        tituloBarra: "Terapeuta",
        backArrow: {display: 'block', link: '/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/editar-terapeuta', (request,response,next) => {
    response.render('editar_terapeuta', {
        usuarios: usuarios, 
        tituloDeHeader: "Editar terapeuta",
        tituloBarra: "Terapeuta",
        backArrow: {display: 'block', link: '/gestion-usuarios/perfil-terapeuta'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/crear-terapeuta', (request,response,next) => {
    response.render('crear_terapeuta', {
        usuarios: usuarios, 
        tituloDeHeader: "Nuevo terapeuta",
        tituloBarra: "Nuevo terapeuta",
        backArrow: {display: 'block', link: '/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/perfil-gestor', (request,response,next) => {
    response.render('perfil_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil gestor",
        tituloBarra: "Gestor",
        backArrow: {display: 'block', link: '/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/editar-gestor', (request,response,next) => {
    response.render('editar_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Editar gestor",
        tituloBarra: "Gestor",
        backArrow: {display: 'block', link: '/gestion-usuarios/perfil-gestor'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/perfil-administrador', (request,response,next) => {
    response.render('perfil_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil administrador",
        tituloBarra: "Administrador",
        backArrow: {display: 'block', link: '/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/editar-administrador', (request,response,next) => {
    response.render('editar_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Editar administrador",
        tituloBarra: "Administrador",
        backArrow: {display: 'block', link: '/gestion-usuarios/perfil-administrador'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios', (request,response,next) => {
    response.render('gestion_usuarios', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Gestión de usuarios",
        tituloBarra: "Usuarios",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-participantes', (request,response,next) => {
    response.render('gestion_participantes', {
        tituloDeHeader: "Gestión de participantes",
        tituloBarra: "Participantes",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-programas', (request,response,next) => {
    response.render('gestion_programas', {
        tituloDeHeader: "Gestión de programas",
        tituloBarra: "Programas",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-ciclos', (request,response,next) => {
    response.render('gestion_ciclos', {
        tituloDeHeader: "Gestión de ciclos",
        tituloBarra: "Ciclos",
        backArrow: {display: 'block', link: '/gestionAdmin'},
        forwArrow: arrows[1]
    });
});

router.get('/', (request,response,next) => {
    response.render('gestion_administrativa', {
        tabGestion: tabGestion, 
        tituloDeHeader: "Gestión Administrativa",
        tituloBarra: "Gestión administrativa",
        backArrow: arrows[0],
        forwArrow: arrows[1]
    });
});

module.exports = router;