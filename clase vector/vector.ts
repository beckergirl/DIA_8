// CLASE VECTOR (RETO 8)

export class Vector {

    private elements: number[];
    public n: number;
    public k: number;


    constructor(n: number, k: number){
        this.elements;
        this.n = n;
        this.k = k;
        
    }

    public add(v1:Vector):Vector{

        let nuevoVector:Vector = new Vector(0,0);
        for (let i=0; i < this.elements.length ;i++){ 

            nuevoVector.elements.push(this.elements[i] + v1.elements[i]);
        } 

        return nuevoVector;
    }
    public subs(v1:Vector):Vector{

        let nuevoVector:Vector = new Vector(0,0);
        for (let i=0; i < this.elements.length ;i++){ 

            nuevoVector.elements.push(this.elements[i] - v1.elements[i]);
        } 

        return nuevoVector;
    }
    public mult(v1:Vector):Vector{

        let nuevoVector:Vector = new Vector(0,0);
        for (let i=0; i < this.elements.length ;i++){ 

            nuevoVector.elements.push(this.elements[i] * v1.elements[i]);
        } 

        return nuevoVector;
    }
    public multNumber(n: number):Vector{

        let nuevoVector:Vector = new Vector(0,0);
        for (let i=0; i < this.elements.length ;i++){ 

            nuevoVector.elements.push(this.elements[i] * n);
        } 

        return nuevoVector;
    }

    public setElements(elements: number[]){
        

        this.elements = elements;

        return elements;
    }
    public getElements(elements: number): number[]{

        return this.elements;
    }
    public print(){

        return Vector;
    }
  
}      




