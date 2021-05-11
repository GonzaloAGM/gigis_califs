const db = require('../util/database');

module.exports = class Objetivo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(idNivel, descripcion) {
        this.idNivel = idNivel;
        this.descripcion = descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO objetivos (idNivel, descripcion) VALUES(?, ?)', 
            [this.idNivel, this.descripcion]
        );
    }


    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute ('SELECT * FROM objetivos')
    }

    static objetivosPorNivel(idNivel) {
        return db.execute ('SELECT * FROM objetivos WHERE idNivel=?',[idNivel])
    }

}

