const programas = [
    {
        nombre: 'Gateo y caminata',
        ciclo: 'EM2020',
        promedio: '4.5',
        grupos:  [1,2],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Cocina',
        ciclo: 'EM2020',
        promedio: '4',
        grupos: [1],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Baile',
        ciclo: 'EM2020',
        promedio: '3',
        grupos:  [1,2],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Sensorial',
        ciclo: 'EM2020',
        promedio: 'X',
        grupos:  [1,2,3],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Matemáticas',
        ciclo: 'EM2020',
        promedio: '3',
        grupos: [1,2,3,4],
        referencia: '/programas/programa1'
    }

];

module.exports = class Programas {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, ciclo, promedio, grupos,referencia) {
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

