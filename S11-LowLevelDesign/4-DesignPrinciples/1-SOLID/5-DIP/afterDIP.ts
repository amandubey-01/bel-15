// Interface
interface Engine {
    start(): void;
}

// Low-level modules
class PetrolEngine implements Engine{
    start(): void {
        console.log("Petrol Engine started");
    }
}


class DieselEngine implements Engine{
    start(): void {
        console.log('Diesel Engine started')
    }
}

// High-level modules
class Car {
    private engine: Engine; // this should not be the instances of concerte class they should be of the interface
    // Dependency Injection
    // The high-level module is dependent on some low-level module, so I am injecting the low-level module from
    // outside.
    constructor(engine : Engine){
        this.engine = engine;
    }

    startCar(){
        this.engine.start();
        console.log('Car started')
    }
}


let petrolEngine = new PetrolEngine();
let merc: Car = new Car(petrolEngine);

// We can simply create another Car running on Diesel Engine. This is achivable as we created an interface in betwen.

// Dependency inversion principle.
// DIP is achieved via Dependency Injection (DI)

export{}