const db = require('../util/database');

module.exports = class Usuario {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nombre, rol, rutaEditar, ruta) {
    this.nombre = nombre;
    this.rol = rol;
    this.rutaEditar = rutaEditar;
    this.ruta = ruta; 
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      'INSERT INTO grupos (numeroGrupo, idPrograma, idCiclo) VALUES (?,?,?)',
      [this.numeroGrupo, this.idPrograma, this.idCiclo]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute('SELECT * FROM grupos');
  }

  static fetchProgramasCicloActual() {
    return db.execute(
      'SELECT G.idPrograma, nombrePrograma, DATE_FORMAT(fechaInicial, "%M") AS fechaInicio , DATE_FORMAT(fechafinal, "%M %Y") AS fechaFinal FROM grupos G ,ciclos C, programas P WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE GROUP BY idPrograma'
    );
  }

  static fetchGruposCicloActual() {
    return db.execute(
      'SELECT numeroGrupo,G.idPrograma FROM grupos G ,ciclos C, programas P WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE'
    );
  }

  static fethcGruposProgramaActual(programa) {
    return db.execute(
      'SELECT numeroGrupo,G.idGrupo,nombrePrograma, U.nombreUsuario, U.apellidoPaterno FROM grupos G ,ciclos C, programas P, grupos_terapeutas GP, usuarios U WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND G.idGrupo=GP.idGrupo AND GP.login=U.login AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE AND nombrePrograma=?',
      [programa]
    );
  }
};