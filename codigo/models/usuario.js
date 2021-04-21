const db = require('../util/database');

module.exports = class Usuario {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(login, password, nombreUsuario, apellidoPaterno, apellidoMaterno) {
    this.login = login;
    this.password = password;
    this.nombreUsuario = nombreUsuario;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
}

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      'INSERT INTO usuarios (login, password, nombreUsuario, apellidoPaterno, apellidoMaterno) VALUES (?,?,?)',
      [this.login, this.password,this.nombreUsuario, this.apellidoPaterno,this.apellidoMaterno]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute('SELECT * FROM usuarios');
  }
}