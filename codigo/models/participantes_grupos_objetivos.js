const db = require('../util/database');

module.exports = class Participante_Grupo_Objetivo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(login, idGrupo, idNivel, idObjetivo, puntajeInicial, puntajeFinal) {
        this.login = login;
        this.idGrupo = idGrupo;
        this.idNivel = idNivel;
        this.idObjetivo = idObjetivo;
        this.apellidoMaterno = apellidoMaterno;
        this.puntajeInicial = puntajeInicial;
        this.puntajeFinal = puntajeFinal;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO participantes_grupos_objetivos (login,idGrupo, idNivel, idObjetivo, puntajeInicial, puntajeFinal) VALUES (?, ?, ?, ?, ?, ?)',
            [this.login, this.idGrupo,this.idNivel, this.idObjetivo,this.puntajeInicial, this.puntajeFinal]
        )
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM participantes_grupos_objetivos');
    }

    static fetchParticipantesPorGrupo(id) {
        return db.execute('SELECT login, PGO.idGrupo, PGO.idNivel, O.descripcion, PGO.puntajeInicial, PGO.puntajeFinal FROM participantes_grupos_objetivo PGO, objetivos O WHERE PGO.idObjetivo=O.idObjetivo AND idGrupo=? ORDER BY `PGO`.`login` ASC',[id]);
    }

}