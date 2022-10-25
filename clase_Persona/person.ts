// TIPOS DE DATOS EN TYPESCRIPT:

/* apuntes clase */


export class Person {

    public name: string;
    public surname: string;
    public age: number;
    private address: string;


    constructor(name: string, age: number){

        this.name = "Iris";
        this.surname = "Smith";
        this.age = 35;
        this.address = "Calle Ronda de Atocha";
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

let persona:Person = new Person("Iris", 35,)

/* console.log(persona.name); // Imprime Iris.
console.log(persona.yearOfBirth(2022)); // Imprime 1987.

console.log(persona.setAddress()); // (valor por defecto en el parametro),Imprime Avenida de la Chopera y no Calle Ronda de Atocha.
console.log(persona.getAddress()); */ // Imprime Calle Ronda de Atocha.

