export class Book1 {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;


    constructor(title:string,nPages: number,isbn: string,author: string, editorial:string ){

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public toString():string {

       /* return `itle -  ${this.title}  Number of Pages - ${this.nPages} ISBN - ${this.isbn} Author - ${this.author} Editorial - ${this.editorial}`; /* TEMPLATE STRINGS*/
       return "Title - " + this.title + "\n Number og Pages - " + this.nPages + "\n ISBN - " + this.isbn + "\n Author - " + this.author + "\n Editorial - " + this.editorial;
    }
        
    public setTitle(title: string){

        this.title = this.title;
        return title;
    }
    public getTitle(){

        return this.title;
    }
    public setnPages(nPages: number){

        this.nPages = nPages;
        return nPages;
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
    public setAuthor(author: string){

        this.author = author;
        return author;
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

