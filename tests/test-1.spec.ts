//una clase
/*
class Pet {
    petName: string;
    petAge: number;

    constructor(petName: string, petAge: number) {
        this.petName = petName
        this.petAge = petAge
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.petName}, Edad: ${this.petAge}`)
    }
}


    */

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`)
    }
}

//una seimple función

function restar(a: number, b: number): number {
    return a - b;
}