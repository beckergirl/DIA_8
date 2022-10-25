import { Contacts } from "./contacts"
import { Person } from "./person2"

let misContactos:Contacts = new Contacts();

let persona:Person = new Person("Amelia", 20);
persona.surname = "Carnicero";
persona.address = "Calle Toledo, 1ºA";
console.log(persona);


let persona2:Person = new Person("Estafania", 19);
persona2.surname = "Almeida";
persona2.address = "Calle Santa Engracia, 32.2ºD";

let persona3:Person = new Person("Antonio", 33);
persona3.surname = "Casalprin";
persona3.address = "Avenida de los cerezos, 40";

let persona4:Person = new Person("Marcelo", 45);
persona4.surname = "García";
persona4.address = "Plaza de España, 1";

let people = [persona, persona2, persona3, persona4];
console.log(people);







