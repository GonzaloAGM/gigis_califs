const participantes = [
    {
        nombre:     'Adriana Guadalupe',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alan Eduardo',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alejandro Vangelis',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Inactivo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alexa Nicole',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alexander',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Alma Angelica',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Activo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
    {
        nombre:     'Ana del Carmen',
        apellidoP:  '',
        apellidoM:  '',
        estatus:    'Inactivo',
        rutaEditar: './editar-participante',
        ruta:       './perfil-participante'
    },
];

module.exports = class Participante {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, apellidoP, apellidoM, estatus, rutaEditar, ruta) {
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.estatus = estatus;
        this.rutaEditar = rutaEditar;
        this.ruta = ruta;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        participantes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return participantes;
    }

}