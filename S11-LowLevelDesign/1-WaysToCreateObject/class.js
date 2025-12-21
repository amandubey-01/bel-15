// Creating objects using Literals
// const car = {
//     make: "Toyota",
//     model: "Fortuner",
//     start: function (){
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// }
// car.start();

// 
function car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(`${this.make} ${this.model} is starting`);
    }
    this.drive = function(){
        console.log(`${this.make} ${this.model} is cruising`);
    }
}

const fortuner = new car('Toyota', 'fortuner', 2022);
const bmw = new car('BMW', 'X1', 2023);

fortuner.start();
fortuner.drive();

bmw.start();
bmw.drive();