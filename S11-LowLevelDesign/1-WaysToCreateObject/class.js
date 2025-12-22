// Creating objects using Literals
// const car = {
//     make: "Toyota",
//     model: "Fortuner",
//     start: function (){
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// }
// car.start();

/*
Problems: 
    1. Lot of code duplication.
    2. Memory footprint would be higher.
    3. Not extensible.
    4. Non uniform
    5. Properties are hard coded.
    6. Non secure. Anybody with access can change it in any way.
    So this may not be the best way to create object.
*/ 

// Creating an object using Constructor Function.
// function car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.start = function() {
//         // Injects fuel --> 
//         // Ignite spark plug
//         // Rotates the engine.
//         console.log(`${this.make} ${this.model} is starting`);
//     }

//     this.injectFuel = function (){}
//     this.igniteSparkPlug = function (){}
//     this.rotateEngine = function (){}

//     this.drive = function(){
//         console.log(`${this.make} ${this.model} is cruising`);
//     }
// }

// const fortuner = new car('Toyota', 'fortuner', 2022); // this new is basically your constructor
// const bmw = new car('BMW', 'X1', 2023);

// fortuner.start();
// fortuner.drive();

// bmw.start();
// bmw.drive();

/* 
This solves quite a few problems . This is a very simple representation of a class in node js.  
	Solved code duplication, consume lesser memory, has infused some uniformity, no hard coded properties.
    But still there are problems.
	Problems: 
	1.  Not Extensible. We cannot customize behavior for particular types.
	2. Code Duplication 
	3. Security - the functions this.injectFuel, this.igniteSparkPlug, this.rotateEngine are available outside. 
        Therefore, it is insecure by design.
*/

// Class Keword
class Car {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start = function() {
        // Injects fuel --> 
        // Ignite spark plug
        // Rotates the engine.
        console.log(`${this.make} ${this.model} is starting`);
    }

    injectFuel = function (){}
    igniteSparkPlug = function (){}
    rotateEngine = function (){}
    drive = function(){
        console.log(`${this.make} ${this.model} is cruising`);
    }
}

const fortuner = new Car('Toyota', 'Fortuner', 2022);
fortuner.start();
fortuner.drive();

/*
It solves the problem of extensibility by using extend keyword.
	```JavaScript
	class ElectricCar extends Car {
	}```
	Using extend keyword all the attributes and methods of Car class is available to Electric Car class is 
    available to Electric Car. This extends and as well as avoid code duplication.  We can selectively write 
    few of the implementation thus reducing code duplication.
	Class also ensures security as class gives a way that inhibits certain methods to be accessed just 
    from withing the class. That is should not be accessible from outside the class.

*/

