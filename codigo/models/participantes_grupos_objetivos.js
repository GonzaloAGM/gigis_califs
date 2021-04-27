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

    static fetchParticipantesPorGrupo(idGrupo) {
        return db.execute('SELECT login, PGO.idGrupo, PGO.idNivel, O.descripcion, PGO.puntajeInicial, PGO.puntajeFinal FROM participantes_grupos_objetivo PGO, objetivos O WHERE PGO.idObjetivo=O.idObjetivo AND idGrupo=? ORDER BY `PGO`.`login` ASC',[idGrupo]);
    }

    static fetchParticipantesPorPrograma(idPrograma) {
        return db.execute('SELECT PGO.login, U.nombreUsuario, U.apellidoPaterno, U.apellidoMaterno, PGO.idGrupo, N.nombreNivel, O.descripcion, PGO.puntajeInicial, PGO.puntajeFinal FROM participantes_grupos_objetivo PGO, objetivos O, grupos G, ciclos C, usuarios U, niveles N WHERE PGO.idObjetivo=O.idObjetivo AND PGO.idGrupo=G.idGrupo AND G.idCiclo=C.idCiclo AND PGO.login=U.login AND PGO.idNivel=N.idNivel AND G.idPrograma=? AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE ORDER BY `PGO`.`idGrupo` ASC', [idPrograma]);
    }
}