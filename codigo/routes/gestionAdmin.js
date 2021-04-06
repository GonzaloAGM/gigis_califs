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
        rutaEditar: './editar-terapeuta',
        ruta:       './gestion-usuarios/perfil-terapeuta'
    },
    {
        nombre:     'Eva',
        rol:        'Gestor',
        rutaEditar: './editar-gestor',
        ruta:       './perfil-gestor'
    },
    {
        nombre:     'Maye',
        rol:        'Administrador',
        rutaEditar: './editar-administrador',
        ruta:       './gestion-usuarios/perfil-administrador'
    },
    {
        nombre:     'Gabriela',
        rol:        'Terapeuta',
        rutaEditar: './editar-terapeuta',
        ruta:       './perfil-terapeuta'
    },
    {
        nombre:     'Valentina',
        rol:        'Terapeuta',
        rutaEditar: './perfil-terapeuta',
        ruta:       './gestion-usuarios'
    }
];

const participantes = [
    {
        nombre:     'Adriana Guadalupe',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alan Eduardo',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alejandro Vangelis',
        estatus:    'Inactivo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alexa Nicole',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alexander',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alma Angelica',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Ana del Carmen',
        estatus:    'Inactivo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
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

const ciclos_actuales = [
    {
        nombre:     'Enero-Marzo',
        anio:       '2021',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2021',
        ruta:       './gestion-perfil-ciclo'
    }    
];

const ciclos_anteriores = [
    {
        nombre:     'Enero-Marzo',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    } ,   
    {
        nombre:     'Julio-Septiembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Octubre-Diciembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },  
    {
        nombre:     'Enero-Marzo',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Julio-Septiembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Octubre-Diciembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Enero-Marzo',
        anio:       '2019',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Abril-Junio',
        anio:       '2019',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Julio-Septiembre',
        anio:       '2019',
        ruta:       './gestion-perfil-ciclo'
    },
    {
        nombre:     'Octubre-Diciembre',
        anio:       '2020',
        ruta:       './gestion-perfil-ciclo'
    },
     
];

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/perfil-terapeuta', (request,response,next) => {
    response.render('perfil_terapeuta', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil terapeuta",
        tituloBarra: "Marcela",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/editar-terapeuta', (request,response,next) => {
    response.render('editar_terapeuta', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Editar terapeuta",
        tituloBarra: "Terapeuta",
        backArrow: {display: 'block', link: '/gestionAdmin/perfil-terapeuta'},
        forwArrow: arrows[1]
    });
});

router.get('/crear-terapeuta', (request,response,next) => {
    response.render('crear_terapeuta', {
        tituloDeHeader: "Nuevo terapeuta",
        tituloBarra: "Nuevo terapeuta",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/perfil-gestor', (request,response,next) => {
    response.render('perfil_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil gestor",
        tituloBarra: "Gestor",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/editar-gestor', (request,response,next) => {
    response.render('editar_usuario', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Editar gestor",
        tituloBarra: "Gestor",
        backArrow: {display: 'block', link: '/gestionAdmin/perfil-gestor'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-usuarios/perfil-administrador', (request,response,next) => {
    response.render('perfil_usuario', {
        usuarios: usuarios, 
        tituloDeHeader: "Perfil administrador",
        tituloBarra: "Administrador",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-usuarios'},
        forwArrow: arrows[1]
    });
});

router.get('/editar-administrador', (request,response,next) => {
    response.render('editar_usuario', {
        usuarios: usuarios, 
        roles: roles, 
        tituloDeHeader: "Editar administrador",
        tituloBarra: "Administrador",
        backArrow: {display: 'block', link: '/gestionAdmin/perfil-administrador'},
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

router.get('/editar-participante', (request,response,next) => {
    response.render('editar_participante', {
        tituloDeHeader: "Editar participante",
        tituloBarra: "Adriana Guadalupe",
        backArrow: {display: 'block', link: '/gestionAdmin/perfil-participante'},
        forwArrow: arrows[1]
    });
});

router.get('/perfil-participante', (request,response,next) => {
    response.render('perfil_participante', {
        tituloDeHeader: "Perfil participante",
        tituloBarra: "Adriana Guadalupe",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-participantes'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-participantes', (request,response,next) => {
    response.render('gestion_participantes', {
        participantes: participantes, 
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

router.get('/gestion-ciclos/agregar-ciclo', (request,response,next) => {
    response.render('agregar_ciclo', {
        tituloDeHeader: "Nuevo ciclo",
        tituloBarra: "Nuevo ciclo",
        backArrow: {display: 'block', link: '/gestionAdmin/gestion-ciclos'},
        forwArrow: arrows[1]
    });
});

router.get('/gestion-ciclos', (request,response,next) => {
    response.render('gestion_ciclos', {
        ciclos_actuales: ciclos_actuales,
        ciclos_anteriores: ciclos_anteriores,
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