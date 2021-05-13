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

    static fetchObjetivosPorParticipante(idGrupo, login) {
        return db.execute('SELECT U.login, U.nombreUsuario, U.apellidoPaterno, U.apellidoMaterno, PGO.idGrupo,O.idObjetivo, O.descripcion, PGO.puntajeInicial, PGO.puntajeFinal, P.puntajeMaximo FROM participantes_grupos_objetivo PGO, objetivos O, programas P, grupos G, usuarios U WHERE PGO.idObjetivo=O.idObjetivo AND PGO.idGrupo=G.idGrupo AND G.idPrograma=P.idPrograma AND PGO.login=U.login AND PGO.idGrupo=? AND PGO.login=?',[idGrupo, login]);
    }

    static fetchParticipantesPorPrograma(idPrograma) {
        return db.execute('SELECT PGO.login, U.nombreUsuario, U.apellidoPaterno, U.apellidoMaterno, PGO.idGrupo, N.nombreNivel FROM participantes_grupos_objetivo PGO, grupos G, ciclos C, usuarios U, niveles N WHERE PGO.idGrupo=G.idGrupo AND G.idCiclo=C.idCiclo AND PGO.login=U.login AND PGO.idNivel=N.idNivel AND G.idPrograma=? AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE GROUP BY PGO.login ORDER BY PGO.login ASC', [idPrograma]);
    }

    static ActualizarPuntajes(login, idGrupo, idObjetivo, pInicial, pFinal) {
        return db.execute('UPDATE participantes_grupos_objetivo SET puntajeInicial=?, puntajeFinal=? WHERE login=? AND idGrupo=? AND idObjetivo=?',[pInicial,pFinal,login,idGrupo,idObjetivo]);
    }


}