const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

const programasConsutas = [
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    },
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        nivel:  'looks_one',
        cantDePart: 12
    }
];

const programasResultados = [
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    },
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    },
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    },
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    },
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    },
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    },
    {
        nombre: 'Lectura 1',
        nivel:  'looks_one',
        ciclo: 'EM2020',
        numCoincid: 13,
        numParticip: 19,
        promedio: 3.5,
        avance: 35,
        linkFoto: 'https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg'
    }
];

const carrouselTarj = [
    {
        color: 'red',
        numLink: '#one!'
    },
    {
        color: 'blue',
        numLink: '#two!'
    },
    {
        color: 'green',
        numLink: '#three!'
    },
    {
        color: 'yellow',
        numLink: '#four!'
    }
];

let consultaGen = {
    promTotal: 3.3,
    totalCoincid: 24,
    avanceGen: 25 
};

let estadoConsulta = false;
let mostrarSexEdad = true;

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/Resultados', (request, response, next) => {
    response.render('consultas_Resultados', {
        tituloDeHeader: "Consulta - Resultados",
        tituloBarra: "Resultados de consulta",
        estadoConsulta: estadoConsulta,
        mostrarSexEdad: mostrarSexEdad,
        consultaGen: consultaGen,
        programasResultados: programasResultados
    });

    console.log("Consultas Resultados");
    response.status(201);
});

router.post('/Resultados', (request, response, next) => {
    console.log("Accion post en resultados");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

router.get('/Resultados/ProgramaN', (request, response, next) => {
    response.render('consultas_Programa', {
        tituloDeHeader: "Resultados Programa N",
        tituloBarra: "Resultados - Programa 1 - Ciclo EM 2020",
        estadoConsulta: estadoConsulta,
        mostrarSexEdad: mostrarSexEdad
    });
    console.log("Consultas Resultados por programa");
    response.status(201);
});

router.post('/Resultados/ProgramaN', (request, response, next) => {
    console.log("Accion post en resultados por programa");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

router.get('/', (request, response, next) => {
    response.render('consultas', {
        tituloDeHeader: "Consultas",
        tituloBarra: "Consultas",
        carrouselTarj: carrouselTarj,
        programasConsutas: programasConsutas,
        numProg: programasConsutas.length
    });
    console.log("Consultas");
    response.status(201);
});

/* //Este POST es para fechas y filtrar programas
router.post('/', (request, response, next) => {
    console.log("Accion post en consultas");
    response.redirect('Consultas/Resultados');
    response.status(302);
});
*/

//Este POST es para filtrar los resultados de los programas existentes
router.post('/', (request, response, next) => {
    console.log("Accion post en consultas");
    response.redirect('Consultas/Resultados');
    response.status(302);
});

module.exports = router;