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
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
];

app.use('/consultas', rutasConsultas);

app.use('/programas', rutasProgramas);

app.use('/gestionAdmin', rutasGestionAdmin);

app.get('/', (request, response, next) => {
    console.log('Prueba home');
    //response.redirect('/gestionAdmin');
    response.status(200);
    response.send('No hay home');
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Lo sentimos, este sitio no existe');
});

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });
                         