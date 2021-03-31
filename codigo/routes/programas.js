const { request, response } = require('express');
const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/programas/programa1', (request,response,next) => {
    response.render('programas_programa1');
});

router.get('/programas', (request,response,next) => {
    response.render('programas');
});

module.exports = router;