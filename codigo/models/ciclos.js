const db = require('../util/database');

module.exports = class Ciclo {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(fechaInicial, fechaFinal) {
    this.fechaInicial = fechaInicial;
    this.fechaFinal = fechaFinal;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      'INSERT INTO ciclos (fechaInicial, fechaFinal) VALUES (?,?)',
      [this.fechaInicial, this.fechaFinal]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute('SELECT * FROM ciclos');
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static idCicloActual() {
    return db.execute(
      'SELECT idCiclo FROM `ciclos` WHERE fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE'
    );
  }

  static fetchIdCiclo(fecha) {
    return db.execute(
      'SELECT idCiclo FROM `ciclos` WHERE fechaInicial<DATE(?) AND fechaFinal>DATE(?)',
      [fecha, fecha]
    );
  }

  static fetchCiclosAnioActual(){
    return db.execute(
      'SELECT * FROM ciclos WHERE YEAR(fechaInicial)>= YEAR(CURRENT_DATE)'
    );
  }

  static fetchAniosPasados(){
    return db.execute(
      'SELECT YEAR(fechaInicial) AS anio FROM ciclos WHERE YEAR(fechaInicial)< YEAR(CURRENT_DATE) GROUP BY YEAR(fechaInicial) DESC'
    );
  }

};
