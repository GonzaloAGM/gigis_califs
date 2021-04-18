const roles = [
    {
        nombre:     'Terapeuta',
        valor:      '1',
    },
    {
        nombre:     'Administrador',
        valor:      '2',
    },
    {
        nombre:     'Gestor',
        valor:      '3',
    }
];

module.exports = class Rol{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        roles.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return roles;
    }

}