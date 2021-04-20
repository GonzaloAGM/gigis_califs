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
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return programas;
    }
    
    static fetchProgramasCicloActual() {
        return db.execute(
        'SELECT G.idPrograma, nombrePrograma, DATE_FORMAT(fechaInicial, "%M") AS fechaInicio , DATE_FORMAT(fechafinal, "%M %Y") AS fechaFinal FROM grupos G ,ciclos C, programas P WHERE G.idCiclo=C.idCiclo AND G.idPrograma=P.idPrograma AND fechaInicial<CURRENT_DATE AND fechaFinal>CURRENT_DATE GROUP BY idPrograma'
        );
    }
}

