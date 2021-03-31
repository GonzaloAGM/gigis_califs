const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
];

router.use(bodyParser.urlencoded({ extended: false }))

router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/programa1', (request,response,next) => {
    response.render('programas_programa1', {
        tituloDeHeader: "Programa 1",
        tituloBarra: "Programa 1",
        backArrow: {display: 'block', link: '/programas'},
        forwArrow: arrows[1]
    });
});

router.get('/', (request,response,next) => {
    response.render('programas', {
        tituloDeHeader: "Programas",
        tituloBarra: "Programas",
        backArrow: arrows[0],
        forwArrow: arrows[1]
    });
});

module.exports = router;