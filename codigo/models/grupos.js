const grupos = [
    {
        nombre: 'Gateo y caminata',
        terapeuta: 'Valentina Saracho Pitol',
        numero: 1,
        participantes: [
            {
                nombre: 'Alan Eduardo Anaya Flores',
                calificacion: 3
            },
            {
                nombre: 'Alexander Hernández Vargas',
                calificacion: 2
            },
            {
                nombre: 'Diana Canul Pelayo',
                calificacion: 5
            }
            
        ]
        
    },
    {
        nombre: 'Gateo y caminata',
        terapeuta: 'Valentina Saracho Pitol',
        numero: 2,
        participantes: [
            {
                nombre: 'Keyli Milagros Arias Aguillón',
                calificacion: 3
            },
            {
                nombre: 'Valentina González Escobar',
                calificacion: 2
            },
            {
                nombre: 'Orlando Mendoza Castañedas',
                calificacion: 1
            }
            
        ]
        
    },
    {
        nombre: 'Cocina',
        terapeuta: 'Alejandra González',
        numero: 1,
        participantes: [
            {
                nombre: 'Diego Barrón Martínez',
                calificacion: 5
            },
            {
                nombre: 'María de Jesús Medina Arreguín',
                calificacion: 5
            },
            {
                nombre: 'Aranza Solórzano Watson',
                calificacion: 4
            },        
            {
                nombre: 'Ángel Miguel Rodríguez Franco',
                calificacion: 3
            }
        ]
        
    },
    {
        nombre: 'Sensorial',
        terapeuta: 'Carolina Cano Lara',
        numero: 1,
        participantes: [
            {
                nombre: 'Isaac Delgado Nieves',
                calificacion: 4
            },
            {
                nombre: 'Maria Ximena Pastenes Camacho',
                calificacion: 5
            },
            {
                nombre: 'Kaylani Avalos Irenia ',
                calificacion: 4
            },
            {
                nombre: 'Franco Vázquez',
                calificacion: 3
            },
            {
                nombre: 'Diana Canul Pelayo ',
                calificacion: 3
            }
        ]
        
    },

];

module.exports = class Grupo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, terapeuta, numero, participantes,) {
        this.nombre = nombre;
        this.terapeuta = terapeuta;
        this.numero = numero;
        this.participantes = participantes;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return programas;
    }

}