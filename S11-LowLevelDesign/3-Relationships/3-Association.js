// Association
// Uses a relationship
class Person {
    constructor(name){
        this.name = name;
    }

    openAccount(bank) {
        console.log(`${this.name} opened an account at ${bank.name}`)
    }
}

class Bank{
    constructor(name){
        this.name = name;
    }

    provideLoan(person) {
        console.log(`${this.name} provided loan to ${person.name}`)
    }
}

const jay = new Person("Jay");
const PNB = new Bank("PNB");

jay.openAccount(PNB);
PNB.provideLoan(jay);

/*
There is no anykind of ownership. Both exist independently and both has the capability of using each other. They use 
each other by passing instances.
*/