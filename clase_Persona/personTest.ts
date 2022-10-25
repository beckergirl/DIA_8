import { Person } from "./person"

let persona:Person = new Person("Iris", 35)

console.log(persona.name); // Imprime Iris.
console.log(persona.yearOfBirth(2022)); // Imprime 1987.

console.log(persona.setAddress()); // (valor por defecto en el parametro),Imprime Avenida de la Chopera y no Calle Ronda de Atocha.
console.log(persona.getAddress()); // Imprime Calle Ronda de Atocha.