
import { Book1 } from "./book1";
import { Library } from "./library"

let libro1: Book1 = new Book1("Introducción a Javascript",233,"2344433-BC23333","Joseph Smith", "Now Editions");
console.log(libro1.getAuthor());

let libro2: Book1 = new Book1("Las Correcciones",563,"8744433-MS23773","Jonathan Franzen", "Seix Barral");
console.log(libro2);

let libro3: Book1 = new Book1("Lolita",302,"982433-CR773","Vladímir Nabókov", "Anagrama Editorial");
console.log(libro3);

let libro4:Book1 = new Book1("Instituto Topeka",304,"9788439738282","Ben Lernner", "Literatura Random Hause");
console.log(libro4);

let biblioteca: Library = new Library([],"Biblioteca Nacional", "Ramon Gomez de la Serna");
console.log(biblioteca);

console.log(biblioteca.getNumberOfBooks());

console.log(biblioteca.toString());

console.log(biblioteca.findByAuthor("Brandon Sanderson"));

