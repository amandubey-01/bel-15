class Car {
    #make;
    constructor (make, model, year, color, isElectric){
        this.#make = make;
        this.model = model;
        this.year = year;
    }

    start(){
        this.#injectFuel();
        // console.log(`${this.make} ${this.model} is starting...`); 
        // --> output: undefined Fortuner is starting...
        // because #make and make are two different thing. hence
        console.log(`${this.#make} ${this.model} is starting...`); 
    }

    #injectFuel(){
        console.log(`${this.#make} ${this.model} is adding fuel to engine`);
    }
    drive(){
        console.log(`${this.#make} ${this.model} is driving at ${speed} Km/h.`);
    }
}

const fortuner = new Car("Toyota", "Fortuner", 2022);
// fortuner.make = "Maruti Suzuki" --> this didn't change the car remain Toyota, as we made make in class as private.
// fortuner.model = "Innova" --> this wasn't private so it was changed to Innova
fortuner.start();
// console.log(fortuner.make); // -> undefined as there is no public method like make. 

// console.log(fortuner.#make); --> error not accessible.
// SyntaxError: Private field '#make' must be declared in an enclosing class, but we have #make in class
// but it is not available, as $make is accessible from withing the class.

// fortuner.injectFuel(); Cannot be accessed from outside of class.

// Two access modifier's available in js. 

