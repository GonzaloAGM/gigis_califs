const db = require('../util/database');

module.exports = class Grupo {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(numeroGrupo, idPrograma, idCiclo) {
    this.numeroGrupo = numeroGrupo;
    this.idPrograma = idPrograma;
    this.idCiclo = idCiclo;
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

  static fetchGruposCicloActual() {
    return db.execute(
      'SELECT numeroGrupo,G.idPrograma FROM grupos G ,ciclos C, programas P WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE'
    );
  }

  static fethcGruposProgramaActual(idPrograma) {
    return db.execute(
      'SELECT numeroGrupo,G.idGrupo,nombrePrograma, U.nombreUsuario, U.apellidoPaterno FROM grupos G ,ciclos C, programas P, grupos_terapeutas GP, usuarios U WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND G.idGrupo=GP.idGrupo AND GP.login=U.login AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE AND P.idPrograma=?',
      [idPrograma]
    );
  }
};
