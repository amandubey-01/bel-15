// class Vehicle{
//     make: string;
//     model: string;

//     constructor(make: string, model: string){
//         this.make = make;
//         this.model = model;
//     }

//     start (): void {
//         console.log(`Starting the vehicle: ${this.make} ${this.model}`);
//     }
//     stop (): void {
//         console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
//     }
// }



// class Car extends Vehicle{
//     start(): void {
//         console.log(`Starting the car: ${this.make} ${this.model}`);
//     }

// }   

// class Truck extends Vehicle{
//     start(): void {
//         console.log(`Starting the truck: ${this.make} ${this.model}`);
//     }
    
// }   
// We won't instantiate Vehicle. Vehicle is a generic concept we try to standardize that if you have a vehicle, it will
// have start and stop method.
// In real world scenario we never instantiate a Vehicle, it doesn't make any sense. We will either have a Car or will
// have a Truck. So the start and stop is never implemented. Each type of method needs to have its start and stop
// methods. 
// So the Vehicle class must be written in a way that it's child class to have implementation of these methods.
// This can be done using abstract classes.
// I would never want my vehicle class to instantiate but I want the Vehicle class to provide a structure 
// to my child classes.

abstract class Vehicle{
    make: string;
    model: string;

    constructor(make: string, model: string){
        this.make = make;
        this.model = model;
    }

    abstract start (param1: string, param2: string): void;
    stop (): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
}

// The moment we make a class abstract, it comes with some additional capabilities. 
// Firstly, these classes gives uniform interfaces for all the child classes that extends this class. 
// Secondly, we can never instantiate abstract classes.
// This declare that if someone extends this Vehicle class, it should provide their own implementation of 
// start which takes param1 and param2 and should have void response. Abstract clases gives us capability
// to describe abstract methods, methods that have just signature but does not have body.
// Abstract methods are used to give unifomrity to child classes, and is one to achieve abstraction.
class Car1 extends Vehicle{
    start(): void {
        console.log(`Starting the car: ${this.make} ${this.model}`);
    }

}   

class Truck1 extends Vehicle{
    start(): void {
        console.log(`Starting the truck: ${this.make} ${this.model}`);
    }
    
} 

interface Drivaeable{
    speed: number;
    drive(): void;
    start(): void;
    stop() : void;
}

interface Flyable {
    takeoff() : void;
    cruise() : void;
    land() : void;
}


// Lets say the car can run on wheels and can fly too.
class Car implements Drivaeable, Flyable {
    speed: number;
    constructor (speed: number){
        this.speed = speed;
    }
    // This car has to provide implementation of all the methods in the Driveable interface.
    drive(): void {
        throw new Error("Method not implemented.");
    }

    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }

    takeoff(): void {
        throw new Error("Method not implemented.");
    }

    land(): void {
        throw new Error("Method not implemented.");
    }

    cruise(): void {
        throw new Error("Method not implemented.");
    }
    
}

class Truck implements Drivaeable{
    speed: number;
    constructor (speed: number){
        this.speed = speed
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }

}

/* 
The thought process changes here, in case of abstract classes we were thinking from the hierarchy of classes. This can
go out of hand when we have large hierarchy of classes. 
While using interfaces the thought process changed to the behavior perspective, that is what could be the different
behaviors. 

So there are two ways to implement abstraction is by abstract classes or intrefaces.
The difference is that in abstract classes we can have abstract methods or can have concrete methods. Whereas in 
interfaces you can have just the abstract methods. We don't even need abstract keyword.

Interface can have properties but can not have values for them.

Can an abstract class implement an interface. Technically an abstract class could implement an interface. As per 
definition of interface the implementing class should have a concrete implementation.  
*/

abstract class xyz implements Drivaeable {
    speed: number;
    constructor (speed: number){
        this.speed = speed;
    }
    start(): void {
        throw new Error('Method not implemented');
    }
    drive(): void {
        throw new Error('Method not implemented');
    }
    stop(): void {
        throw new Error('Method not implemented');
    }
}

/*
Can interface implement another interface. 
*/

/*
Difference btw abstraction and encapsulation.
Abstraction is a wider concept than encapsulation.
In encapsulation we would be withing the class. Within the class we would have private, public methods and all, public
would use some of the private attributes and private methods internally. Yeah we are hiding implemenation but
it is restricted to class. So in a manner we can say that encapsulation is a subset of abstraction.

But in abstraction we are hiding implementation and we are also adding uniformity across child classes or the classes
that implements the interface.
*/