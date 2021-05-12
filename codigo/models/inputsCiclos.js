const db = require('../util/database');
module.exports = class inputsCiclos {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(prograSel, terapAsig, fechaCiclo, idCiclo, idGrupo) {
      this.prograSel = prograSel;
      this.terapAsig = terapAsig;
      this.fechaCiclo = fechaCiclo;
      this.idCiclo = idCiclo;
      this.idGrupo = idGrupo;
    }
  
    static setProg(prograSel){
      this.prograSel = prograSel;
    }

    static setGrup(terapAsig){
        this.terapAsig = terapAsig;
    }
  
    static getProg(){
        return this.prograSel;
    }

    static getTer(){
        return this.terapAsig;
    }

    static llenarTablas(fechaCiclo){
      this.fechaCiclo = fechaCiclo;
      this.idCiclo = 'SELECT idCiclo FROM ciclos WHERE fechaFinal =?',
                      [this.fechaCiclo];
      for (let programa of this.prograSel){
        let i = 0;
        for (let terapeuta of this.terapAsig){
          if (programa = terapeuta.idPrograma){
            db.execute('INSERT INTO grupos (numeroGrupo, idPrograma, idCiclo) VALUES (?, ?, ?)',
                        [i, programa, this.idCiclo]
            ).then(() => {
              this.idGrupo = 'SELECT idGrupo FROM grupos WHERE numeroGrupo = ? AND idCiclo = ? AND idPrograma = ?',
                [i, this.idCiclo, programa];
              db.execute('INSERT INTO grupos_terapeutas (idGrupo, login) VALUES (?, ?)',
                [this.idGrupo, terapeuta.login]
              );
            }).catch(err => {
                console.log(err);
            });
            i += 1;
          }
        }
      };
      return true;
  }
}