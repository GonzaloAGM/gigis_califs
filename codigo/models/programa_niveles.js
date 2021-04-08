const programasNiveles = [
    {
        nombre:     'Lenguaje',
        niveles:  [
            {
                nombre: 'Prelingüístico',
            },
            {
                nombre: 'Básico',
            },
            {
                nombre: 'Intermedio',
            },
            {
                nombre: 'Avanzado',
            }
        ],
    },
    {
        nombre:     'Cocina',
        niveles:  [
            {
                nombre: 'Nivel 1',
            }
        ],
    },
    {
        nombre:     'Lectura',
        niveles:  [
            {
                nombre: 'Nivel 1',
            },
            {
                nombre: 'Nivel 2',
            },
            {
                nombre: 'Nivel 3',
            }
        ],
    },
    {
        nombre:     'Soy productivo',
        niveles:  [
            {
                nombre: 'Nivel 1',
            }
        ],
    },
    {
        nombre:     'Terapia sensorial',
        niveles:  [
            {
                nombre: 'Nivel 1',
            }
        ],
    }    
];

module.exports = class ProgramaNiveles {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, nivel, nombreNivel) {
        this.nombre = nombre;
        this.niveles = nivel;
        this.niveles.nombre = nombreNivel;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        programasNiveles.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return programasNiveles;
    }

}