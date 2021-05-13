//Dependencias
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//Rutas
const rutasConsultas = require('./routes/consultas');
const rutasProgramas = require('./routes/programas');
const rutasGestionAdmin = require('./routes/GestionAdmin');
const rutaSessionUsuarios = require('./routes/sesion_usuarios');

app.set('view engine', 'ejs');
app.set('views', 'views');

//Inicializar dependencias
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'ytfvvjsdfmc467879cievy8ihrwtbuc4y+nu948wbyn8cr4mivnj8bfugnc', //cambiar a otra variable externa que no se versione
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


//Enviar archivos estáticos en carpeta public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/consultas', rutasConsultas);

app.use('/programas', rutasProgramas);

app.use('/gestionAdmin', rutasGestionAdmin);

app.use('/usuarios',rutaSessionUsuarios);

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
                         