//Estructura básica de una aplicación con express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

const path = require('path');


const rutasConsultas = require('./routes/consultas');
const rutasProgramas = require('./routes/programas');
const rutasGestionAdmin = require('./routes/GestionAdmin');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(session({
    secret: 'ytfvvjsdfmc467879cievy8ihrwtbuc4y+nu948wbyn8cr4mivnj8bfugnc', //cambiar a otra variable externa que no se versione
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

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
                         