const { request, response } = require('express');
//Estructura básica de una aplicación con express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const rutasConsultas = require('./routes/consultas');
const rutasProgramas = require('./routes/programas');
const rutasGestionAdmin = require('./routes/GestionAdmin');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware

app.use('/consultas', rutasConsultas);

app.use('/programas', rutasProgramas);

app.use('/gestionAdmin', rutasGestionAdmin);

