const programas = [
    {
        nombre: 'Gateo y caminata',
        ciclo: 'EM2020',
        promedio: '4.5',
        grupos:  [
            {
                numero: 1,
                referencia: '/programas/gateo-y-caminata-grupo-1'
            },
            {
                numero: 2,
                referencia: '/programas/gateo-y-caminata-grupo-2'
            }
        ],
    },
    {
        nombre: 'Cocina',
        ciclo: 'EM2020',
        promedio: '4',
        grupos: [
            {
                numero: 1,
                referencia: '/programas/cocina-grupo-1'
            }
        ],
    },
    {
        nombre: 'Lectura',
        ciclo: 'EM2020',
        promedio: '3',
        grupos:  [
            {
                numero: 1,
                referencia: '/programas/lectura-grupo-1'
            },
            {
                numero: 2,
                referencia: '/programas/lectura-grupo-2'
            }
        ],
    },
];

module.exports = class Programas {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, ciclo, promedio, grupos) {
        this.nombre = nombre;
        this.ciclo = ciclo;
        this.promedio = promedio;
        this.grupos = grupos;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return programas;
    }

}

