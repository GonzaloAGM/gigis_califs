const programas = [
    {
        nombre: 'Gateo y caminata',
        ciclo: 'EM2020',
        promedio: '4.5',
        grupos:  [1,2],
        puntajeMaximo: 4,
        referencia: '/programas/gateo-y-caminata'
    },
    {
        nombre: 'Cocina',
        ciclo: 'EM2020',
        promedio: '4',
        grupos: [1],
        puntajeMaximo: 4,
        referencia: '/programas/cocina'
    },
    {
        nombre: 'Lectura',
        ciclo: 'EM2020',
        promedio: '3',
        grupos:  [1,2],
        puntajeMaximo: 5, 
        referencia: '/programas/lectura'
    },
];

module.exports = class Programas {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, ciclo, promedio, grupos, puntajeMaximo, referencia) {
        this.nombre = nombre;
        this.ciclo = ciclo;
        this.promedio = promedio;
        this.grupos = grupos;
        this.puntajeMaximo = puntajeMaximo;
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

