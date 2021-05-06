const Usuario = require('../models/usuarios');
const bcrypt = require('bcryptjs');

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getlogin = (request, response, next) => {
    response.render('login', {
        tituloDeHeader: 'Login',
        error: request.session.error === undefined ? false : request.session.error,
        titulo: 'Login'
    });
};

exports.postlogin = (request, response, next) => {
    
    request.session.error = undefined;

    Usuario.fetchOne(request.body.username)
        .then(([rows]) => {
            bcrypt.compare(request.body.password, rows[0].password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = rows[0].username;
                        return request.session.save(err => {
                            response.redirect('/gestionAdmin');
                        });
                    }
                    request.session.error = 'Usuario y/o contraseña incorrectos';
                    response.redirect('login');
                }).catch(err => {
                    request.session.error = 'Usuario y/o contraseña incorrectos';
                    response.redirect('login');
                });
        })
        .catch(err => {
            console.log(err);
            request.session.error = 'Error de Comunicacion con el Server';
            response.redirect('login');
        });
};