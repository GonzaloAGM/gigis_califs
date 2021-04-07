const programas = [
    {
        nombre: 'Gateo y caminata',
        ciclo: 'EM2020',
        promedio: '4.5',
        grupos:  [1,2],
        referencia: '/programas/gateo-y-caminata'
    },
    {
        nombre: 'Cocina',
        ciclo: 'EM2020',
        promedio: '4',
        grupos: [1],
        referencia: '/programas/cocina'
    },
    {
        nombre: 'Lectura',
        ciclo: 'EM2020',
        promedio: '3',
        grupos:  [1,2],
        referencia: '/programas/lectura'
    },
];

module.exports = class Programas {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, ciclo, promedio, grupos, referencia) {
        this.nombre = nombre;
        this.ciclo = ciclo;
        this.promedio = promedio;
        this.grupos = grupos;
        this.referencia = referencia;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return programas;
    }

}

