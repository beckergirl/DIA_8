export class Book {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;


    constructor(titulo:string,numeroPaginas: number,isbn: string,autor: string, editorial:string ){

        this.title = titulo;
        this.nPages = numeroPaginas;
        this.isbn = isbn;
        this.author = autor;
        this.editorial = editorial;
    }

    public toString():string {

       /* return `itle -  ${this.title}  Number of Pages - ${this.nPages} ISBN - ${this.isbn} Author - ${this.author} Editorial - ${this.editorial}`; /* TEMPLATE STRINGS*/
       return "Title - " + this.title + "\n Number og Pages - " + this.nPages + "\n ISBN - " + this.isbn + "\n Author - " + this.author + "\n Editorial - " + this.editorial;
    }
        
    public setTitle(titulo: string){

        this.title = titulo;
        return titulo;
    }
    public getTitle(){

        return this.title;
    }
    public setnPages(numeroPaginas: number){

        this.nPages = numeroPaginas;
        return numeroPaginas;
    }
    public getnPages(){

        return this.nPages;
    }
    public setIsbn(isbn: string){

        this.isbn = isbn;
        return isbn;
    }
    public getIsbn(){

        return this.isbn;
    }
    public setAuthor(autor: string){

        this.author = autor;
        return autor;
    }
    public getAuthor(){

        return this.author;
    }
    public setEditorial(editorial:string){

        this.editorial = editorial;
        return editorial;
    }
    public getEditorial(){

        return this.editorial;
    }
  
    }

/* let libro:Book = new Book("Introducción a Javascript",233,"2344433-BC23333","Joseph Smith", "Now Editions"); 

console.log(libro);
console.log(libro.toString()); */

