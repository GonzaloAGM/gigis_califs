const db = require('../util/database');

module.exports = class Participante {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(login, password, nombreUsuario, apellidoPaterno, apellidoMaterno, estatus, sexo, fechaNacimiento, edad, telefonoPadre) {
        this.login = login;
        this.password = password;
        this.nombreUsuario = nombreUsuario;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.estatus = estatus;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.telefonoPadre = telefonoPadre;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO usuarios (login, password, nombreUsuario, apellidoPaterno, apellidoMaterno) VALUES (?, ?, ?, ?, ?)',
            [this.login, this.password,this.nombreUsuario, this.apellidoPaterno,this.apellidoMaterno]
        ).then(() => {
            db.execute('INSERT INTO participantes (login, estatus, sexo, fechaNacimiento, edad, telefonoPadre) VALUES (?, ?, ?, ?, ?,?)',
                [this.login,this.estatus,this.sexo,this.fechaNacimiento, this.edad,this.telefonoPadre])
        }).catch(err => {
            console.log(err);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT P.login, estatus, password, nombreUsuario, apellidoPaterno, apellidoMaterno, sexo, fechaNacimiento, edad, telefonoPadre  FROM participantes P,usuarios U WHERE P.login = U.login');
    }
}