const db = require('../util/database');

module.exports = class Programas {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombrePrograma, puntajeMaximo, dirImagen) {
        this.nombrePrograma = nombrePrograma;
        this.puntajeMaximo = puntajeMaximo;
        this.dirImagen = dirImagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO programas (nombrePrograma, puntajeMaximo, dirImagen) VALUES (?,?,?)',
            [this.nombrePrograma,this.puntajeMaximo,this.dirImagen]
          );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM programas ORDER BY nombrePrograma ASC');
    }

    static fetchIdPrograma(nombrePrograma) {
        return db.execute('SELECT idPrograma FROM programas WHERE nombrePrograma LIKE ?', 
            [nombrePrograma]
        );
    }
    
    static fetchProgramasCicloActual() {
        return db.execute(
        'SELECT G.idPrograma, nombrePrograma, P.dirImagen, DATE_FORMAT(fechaInicial, "%M") AS fechaInicio , DATE_FORMAT(fechafinal, "%M %Y") AS fechaFinal FROM grupos G ,ciclos C, programas P WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE GROUP BY idPrograma'
        );
    }

    static fetchNombreProgama(idPrograma){
        return db.execute('SELECT nombrePrograma FROM programas WHERE idPrograma=?', 
            [idPrograma]
        );
    }
}

