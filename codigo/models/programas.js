const programas = [
    {
        nombre: 'Lectura 1',
        ciclo: 'EM2020',
        promedio: 'X',
        grupos:  [1,2],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Sensorial',
        ciclo: 'EM2020',
        promedio: 'X',
        grupos:  [1,2],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Escritura',
        ciclo: 'EM2020',
        promedio: 'X',
        grupos:  [1,2,3],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Ballet',
        ciclo: 'EM2020',
        promedio: 'X',
        grupos: [1],
        referencia: '/programas/programa1'
    },
    {
        nombre: 'Matemáticas',
        ciclo: 'EM2020',
        promedio: 'X',
        grupos: [1,2,3,4],
        referencia: '/programas/programa1'
    }

];

const arrows = [
    {display: 'none', link: ''}, //Backward arrow
    {display: 'none', link: ''}  //Forward  arrow
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

module.exports = class Arrows {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(display, link) {
        this.display = display;
        this.link = link;
        
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return arrows;
    }

}