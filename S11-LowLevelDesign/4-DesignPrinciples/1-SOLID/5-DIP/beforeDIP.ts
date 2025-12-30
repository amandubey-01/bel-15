// Low-level module
class PetrolEngine {
    start(){
        console.log('Petrol engine started');
    }
}

// High-level module
class Car {
    private engine: PetrolEngine; // This car depends on a engine, it should not have a dependency on PetrolEngine.
    // We can build an interface btw Car and PetrolEngine, and that interface would be Engine.
    constructor(){
        this.engine = new PetrolEngine();
    }

    startCar(){
        this.engine.start();
        console.log("Car started");
    }
    
}

/*
The Car is directly dependent on PetrolEngine. When we want to build a car having Diesel Engine hell will break loose. 
Will have to rewrite the entire code. So, 
*/

const car = new Car();
car.startCar(); // Output: Petrol engine started. PM comes and says want to built DieselEngine car or EVCar. Then 
// you are stuck bcz your high-level module is coupled with low-level module. It could have done in a better way.
// 