const usuarios = [
    {
        nombre:     'Marcela',
        rol:        'Terapeuta',
        rutaEditar: './editar-terapeuta',
        ruta:       './gestion-usuarios/perfil-terapeuta'
    },
    {
        nombre:     'Eva',
        rol:        'Gestor',
        rutaEditar: './editar-gestor',
        ruta:       './perfil-gestor'
    },
    {
        nombre:     'Maye',
        rol:        'Administrador',
        rutaEditar: './editar-administrador',
        ruta:       './gestion-usuarios/perfil-administrador'
    },
    {
        nombre:     'Gabriela',
        rol:        'Terapeuta',
        rutaEditar: './editar-terapeuta',
        ruta:       './perfil-terapeuta'
    },
    {
        nombre:     'Valentina',
        rol:        'Terapeuta',
        rutaEditar: './perfil-terapeuta',
        ruta:       './gestion-usuarios'
    }
];

module.exports = class Usuarios {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, rol, rutaEditar, ruta) {
        this.nombre = nombre;
        this.rol = rol;
        this.rutaEditar = rutaEditar;
        this.ruta = ruta; 
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        usuarios.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return usuarios;
    }

}
