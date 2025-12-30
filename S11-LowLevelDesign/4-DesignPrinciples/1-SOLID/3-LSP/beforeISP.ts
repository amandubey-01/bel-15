/*
LSP states that objects of a derived class should be able to replace objects of the base class without affecting the 
correctness of the program.

This means that derived classes must honor the contracts, behavior, and properties of the base class, ensuring that 
the software remains consistent and reliable also when new subclasses are introduced.

*/

interface PaymentMethod{
    processPayment(amount: Number) : void;
}

class CreditCardPayment implements PaymentMethod {
    processPayment(amount: Number): void {
        console.log("Payment made via Credit Card", amount)
    }
}

class DebitCardPayment implements PaymentMethod {
    processPayment(amount: Number): void {
        console.log("Payment made via Debit Card", amount)
    }
}

class UPIPayment implements PaymentMethod {
    processPayment(amount: Number): void {
        console.log("Payment made via UPI", amount)
    }
}

class FreePayment implements PaymentMethod{
    processPayment(amount: Number): void {
        // but the developer write the code in this manner, since it is free payment, and I don't want to perform
        // any logic.
        // throw new Error('No processing needed'); this is against the LSP contract
        // hence we do below one.
        console.log('No payment needed as it is free payment');
    }
}

class PayServiceOCP{
    paymentMethod : PaymentMethod;
    constructor(paymentMethod: PaymentMethod){
        this.paymentMethod = paymentMethod;
    }
    processPayment(amount : Number){
        this.paymentMethod.processPayment(amount);
    }
}

/* Now what happens is your product manager comes to you, and asks to add a new product where it is distributed freely
that is anyone didn't need to make any payment. 
One way would be, go to entire flow and write if-else logic and what not. And say if payment type is such and such
do not do payment and all. 
Another way is implement a class FreePayment, entire flow remains same just adding a new class FreePayment. 
*/




// Main code 
// const inputPaymentTypeOCP = "CC";
// const CCPaymentType = new CreditCardPayment();
// const DCPaymentType = new DebitCardPayment();


// const payserviceOCP = new PayServiceOCP(CCPaymentType);
// payserviceOCP.processPayment(1000)


/* 
Lets see the impact of this code. Firstly, it follows SRP, OCP. 

Let see it from the main code perspective the main code should not have idea what is happening in payment class and 
all. 
*/

const inputPaymentTypeOCP = "FREEPAYMENT";
const CCPaymentType = new CreditCardPayment();
const DCPaymentType = new DebitCardPayment();

const freePayment = new FreePayment();


const payserviceOCP = new PayServiceOCP(freePayment);
payserviceOCP.processPayment(0);

// Is the developer wrong in any way. No. Bcz - new service was implemented, switched the service and passed the
// payment amount to 0. 
// But it will not yield the desired result.
// Earlier we use to get console.log now will start getting error. And there is a possibilty that the entire
// service breaks.
// This is what Liskov Substitution Principle (LSP) states. 
// What happens is that we have broken your contract wherein your children are not written in a way that they can 
// be repalced with each other. 
// Imagine that above all these Payment classes there was a base class. The base class could also have processPayment
// method. So the children are not written in a way that it can replace the functionality of the base class.
// This is what LSP is. Ideally while writing you should follow the contract.

export {}