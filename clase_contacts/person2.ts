// TYPESCRIPT:

export class Person {

    public name: string;
    public surname: string;
    public age: number;
    public address: string;


    constructor(nombre: string, edad: number){

        this.name = nombre;
        this.surname;
        this.age = edad;
        this.address;
    }
    public printName(){

        console.log(persona.name);
    }
    public yearOfBirth(currentYear: number){  

         return  currentYear - this.age;
    }
    setAddress(address: string = "Avenida de la Chopera"){

        return address;
    }
    getAddress(){

        return this.address;
    }

}

let persona:Person = new Person("Antonia", 75)

/* console.log(persona.name); // Imprime Iris.
console.log(persona.yearOfBirth(2022)); // Imprime 1987.

console.log(persona.setAddress()); // (valor por defecto en el parametro),Imprime Avenida de la Chopera y no Calle Ronda de Atocha.
console.log(persona.getAddress()); */ // Imprime Calle Ronda de Atocha.

