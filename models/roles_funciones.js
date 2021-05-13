const db = require('../util/database');

module.exports = class Rol_Funcion {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(idRol, idFuncion, nombre) {
    this.idRol = idRol;
    this.idFuncion = idFuncion;
    this.nombre = nombre;
}

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      'INSERT INTO roles_funciones (idRol, idFuncion, nombre) VALUES (?,?,?)',
      [this.idRol,this.idFuncion,this.nombre]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute('SELECT * FROM roles_funciones');
  }
}