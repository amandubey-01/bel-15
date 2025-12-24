class Animal {
    // Private Field Only accesible inside the class
    #name

    constructor(name, sound){
        this.#name = name; // Private
        this.sound = sound; // Public
    }

    // public method
    speak(){
        console.log(`${this.#name} says ${this.sound}`);
    }

    // Getter for name (read-only access)
    getName(){
        return this.#name;
    }

    // Setter for name (controlled-access)
    setName(newName){
        if (typeof newName === 'string' && newName.length > 0){
            this.#name = newName;
        } else{
            console.log('Invalid name');
        }
    }
}


class Mammal extends Animal {
    
    constructor (name, sound,type){
        super(name,sound);
        this.type = type;
    }

    breathe () {
        console.log(`${this.getName()} is breathing and make sounds ${this.sound}`);
    }
}
// Since the name is a private attribute the child class doesn't have the access to it. Private means that it is
// accessible only within that class.
const cat = new Mammal("Cat", "Meow" , "Lives on land"); 
cat.breathe();

// Question --> When we set something as private I can use getter and setter to access and even set than
// how is it any different from public?
// Answer - Though we have getter and setter, but we can still make some kind of validation, that can put some
// some kind of restriction what is allowed on private variable or methods.

class Human extends Mammal{
    constructor(name,sound,type){
        super(name,sound,type);
    }
    // any public attirbute is available at all places in the hierarchy.
    talk(){
        console.log(`${this.getName()} talks in fluent English`);
    }
    // Overrrides the speak method in the Animal class.
    speak(){
        // this.speak() --> creates infinte recursive loops and hence super.speak() in its place.
        super.speak();
        console.log(`${this.getName()} speaks beautifully`);
    }
}

const tharror = new Human("Shashi Tharror", "talks", "human");
//tharror.talk();
tharror.speak();

/* 
talk(){
    super.speak()
    console.log(`${this.getName()} talks in fluent English`);
}
If we use super in multiLevel Inhertiance than it refers to which parent.
It refers to the parent where the method is first available, or the nearest available method in the hierarchy when 
going from down to upwards.
That is when we use in Human, it first check the Mammal class if it is there then it gets that one, and then it goes to
Animal class. 
There is no way that we can access a method of the grandparent if the method is over ritten in the subsequent
generation.

*/