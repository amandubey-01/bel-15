/* 
Ability of a variable, function, or object to take multiple forms.
There are two ways in which it can take multiple forms. 
In class hierarchy we have base class, child class, then grandchild class. 
The base class has an implementation of a function. Vehicle --> Wheeled Vehicle ---> Car
Vehilce has an implementation of start, wheeled vehicle also has start, and Car also has an implementation of start.
So basaed on where we are in the class hierarchy the same method can change its implementation. 
This is one way that the same method can take different behavior.

Second way.
We are in the same class lets say in the car class. We have an implemetation of start that takes 1 parameter, we have
another implementation of the same method start which takes two attributes as parameters. Another implementation that
takes 3 attributes as parameters. That is the start method of the same class can be called differently. This is also 
called taking different forms.

Therefore, two types of polymorphism. Compile-time polymorphism (method overloading) and Run-time polymorphism (method
overriding).

Method-overloading (compile-time polymorphism) - Same method name but different parameters.
Method-overriding (run-time polymorphism) - Same function signature but can have different implementation across class
hierarchy.
In JS or TS we only have run-time polymorphism.
*/

class Person {
    protected name: string;

    constructor (name: string){
        this.name = name;
    }

    protected getDetails(): string{
        return `Name: ${this.name}`;
    }

    private getPhoneNumber(): number {
        return 1234;
    }
}

class Employee extends Person{
    private role: string;
    constructor (name: string, role: string){
        super(name);
        this.role = role;
    }

    // Overriding the getDetails Implementation
    protected getDetails(): string {
        super.getDetails(); // since getDetails is protected in base class and hence accessible in this child class.
        // super.getPhoneNumber(); ---> private method only accessible from the class it is defined.
        return `Name: ${this.name} is assigned a role of ${this.role}`; 
    }
}

// Protected --> access modifier that makes the attribute/method accessible across the class hierarchy.
// But it is not accessible from outside.

const emp: Employee = new Employee("John Doe" , "Developer");
// emp.getDetails - protected and hence not accessible from here.

