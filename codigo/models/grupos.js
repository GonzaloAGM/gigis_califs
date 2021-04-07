const grupos = [
    {
        nombre: 'Gateo y caminata',
        terapeuta: 'Valentina Saracho Pitol',
        numero: 1,
        promedio: 4.5,
        participantes: [
            {
                nombre: 'Alan Eduardo Anaya Flores',
                calificacion: 3,
                nivel: 1
            },
            {
                nombre: 'Alexander Hernández Vargas',
                calificacion: 2,
                nivel: 1
            },
            {
                nombre: 'Diana Canul Pelayo',
                calificacion: 5,
                nivel: 1
            }
            
        ]
        
    },
    {
        nombre: 'Gateo y caminata',
        terapeuta: 'Valentina Saracho Pitol',
        numero: 2,
        promedio: 3,
        participantes: [
            {
                nombre: 'Keyli Milagros Arias Aguillón',
                calificacion: 3,
                nivel: 1
            },
            {
                nombre: 'Valentina González Escobar',
                calificacion: 2,
                nivel: 1
            },
            {
                nombre: 'Orlando Mendoza Castañedas',
                calificacion: 1,
                nivel: 1
            }
            
        ]
        
    },
    {
        nombre: 'Cocina',
        terapeuta: 'Alejandra González',
        numero: 1,
        promedio: 3.5,
        participantes: [
            {
                nombre: 'Diego Barrón Martínez',
                calificacion: 5,
                nivel: 1
            },
            {
                nombre: 'María de Jesús Medina Arreguín',
                calificacion: 5,
                nivel: 1
            },
            {
                nombre: 'Aranza Solórzano Watson',
                calificacion: 4,
                nivel: 1
            },        
            {
                nombre: 'Ángel Miguel Rodríguez Franco',
                calificacion: 3,
                nivel: 1
            }
        ]
        
    },
    {
        nombre: 'Lectura',
        terapeuta: 'Paula Tornell Pantoja',
        numero: 1,
        promedio: 3,
        participantes: [
            {
                nombre: 'Isaac Delgado Nieves',
                calificacion: 4,
                nivel: 1
            },
            {
                nombre: 'Maria Ximena Pastenes Camacho',
                calificacion: 5,
                nivel: 2
            },
            {
                nombre: 'Kaylani Avalos Irenia ',
                calificacion: 4,
                nivel: 3
            },
            {
                nombre: 'Franco Vázquez',
                calificacion: 3,
                nivel: 3
            },
            {
                nombre: 'Diana Canul Pelayo ',
                calificacion: 3,
                nivel: 2
            }
        ]
        
    },
    {
        nombre: 'Lectura',
        terapeuta: 'Paula Tornell Pantoja',
        numero: 2,
        promedio: 3,
        participantes: [
            {
                nombre: 'Isaac Delgado Nieves',
                calificacion: 3,
                nivel: 1
            },
            {
                nombre: 'Maria Ximena Pastenes Camacho',
                calificacion: 3,
                nivel: 2
            },
            {
                nombre: 'Kaylani Avalos Irenia ',
                calificacion: 3,
                nivel: 3
            },
            {
                nombre: 'Franco Vázquez',
                calificacion: 3,
                nivel: 3
            },
            {
                nombre: 'Diana Canul Pelayo ',
                calificacion: 3,
                nivel: 2
            }
        ]
        
    }

];

module.exports = class Grupo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, terapeuta, numero, promedio, participantes,) {
        this.nombre = nombre;
        this.terapeuta = terapeuta;
        this.numero = numero;
        this.promedio = promedio;
        this.participantes = participantes;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return grupos;
    }

}