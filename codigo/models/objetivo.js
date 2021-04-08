const objetivos = [
    {
        nivel:          '1',
        numero:         '1', 
        descripcion:    'Balbucea'
    },
    {
        nivel:          '1',
        numero:         '2', 
        descripcion:    'Emite ruidos con su garganta'
    },
    {
        nivel:          '1',
        numero:         '3', 
        descripcion:    'Hace pequeños ruidos cuando se le habla'
    },
    {
        nivel:          '1',
        numero:         '4', 
        descripcion:    'Crea sonidos relacionados con el placer y el dolor'
    },
    {
        nivel:          '1',
        numero:         '5', 
        descripcion:    'Sensibilidad ante el ruido'
    },
    {
        nivel:          '2',
        numero:         '1', 
        descripcion:    'Pronuncia vocales'
    },
    {
        nivel:          '2',
        numero:         '2', 
        descripcion:    'Comprende la palabra no'
    },
    {
        nivel:          '2',
        numero:         '3', 
        descripcion:    'Conoce y responde a su nombre'
    },
    {
        nivel:          '2',
        numero:         '4', 
        descripcion:    'Disfruta con las canciones'
    },
    {
        nivel:          '2',
        numero:         '5', 
        descripcion:    'Surge el laleo que son sonidos vocalicos y consonanticos'
    }
    
    
];

module.exports = class Objetivo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nivel, numero, descripcion) {
        this.nivel = nivel;
        this.numero = numero;
        this.descripcion = descripcion;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        objetivos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return objetivos;
    }

}