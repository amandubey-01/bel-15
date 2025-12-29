// Open for extension, closed for modification
/*
Extension --> Let's say we implemented a payment service that have payment mehthods like CC, DC and we can extend it 
by adding more methods like UPI, NetBanking etc. 
Extension is adding new capabilities.
Modification --> On the other hand is changing the existing functionalites. 

A class should be writeen in sych a way that it should be open for extension with minimal changes to the existing code.

*/
// @ts-ignore
// class PayService {
//     processPayments(paymentType: string, amount: Number){
//         if(paymentType == 'CC'){
//             console.log('Payment made via credit card.', paymentType, amount);
//         } else if(paymentType == 'DC'){
//             console.log('Payment made via credit card.', paymentType, amount);
//         }else {
//             console.log('Payment payment type not supported.', paymentType, amount);
//         }
//     }
// }
// This looks good and is the first implementation for any developer. Just starting to code
// Let's say we want to add another payment type of UPI.

// As a developer we would do ctrl c + ctrl v

class PayService {
    processPayments(paymentType: string, amount: Number){ // Anti-pattern --> multiple if-else/ switch
        if(paymentType == 'CC'){
            console.log('Payment made via credit card.', paymentType, amount);
        } else if(paymentType == 'DC'){
            console.log('Payment made via credit card.', paymentType, amount);
        }else if(paymentType == 'UPI'){
            console.log('Payment made via UPI.', paymentType, amount);
        }else {
            console.log('Payment payment type not supported.', paymentType, amount);
        }
    }
}

// Main code
const inputPaymentType = "CC"
const payservice = new PayService();
payservice.processPayments(inputPaymentType, 1000) // This information will be from some UI or somewhere.


// We just copy pasted from developer perspective, but this could have far-reaching consequences. We have the class
// There would be test cases written for it. And then we have to test entire flow once again. Have to test
// CC flow, DC flow, UPI flow. So there would be a scenario that we have to write n number of test cases. And 
// even after this when we push to production, there is a possiblity that something could break as we have
// touched upon this function.
// So this is called code modification. We have modified the code. Once we modified the code it goes through extensive
// testing cycle once again, and developer is on the toes as it could break.


// After OCP

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

class PayServiceOCP{
    paymentMethod : PaymentMethod;
    constructor(paymentMethod: PaymentMethod){
        this.paymentMethod = paymentMethod;
    }
    processPayment(amount : Number){
        this.paymentMethod.processPayment(amount);
    }
}

/*
In this scenarios when we created UPIPayment class we just need to test this class. 
The PayServiceOCP is Closed for modification, but Open for extention. That is we can incorporate additional capacity
(UPIPayment) but then closed for modification which means processPayment doesn't change again and again if I add
more Payment Type.
In real-world scenario it is very difficult to implement this, as we would be writing code in a way where you would 
be modifying some of the function. The idea is that we try to implement OCP if possible.

When we discuss this OCP we see if-else/swithc block, if it is one/two blocks it is fine. But if we see multiple blocks 
then it is not fine. And this situation is one of the anti-pattern. It is one of the biggest anit-pattern, if-else block.
There are multiple different patterns nad principle that solves this. OCP is one such principle that solves this 
anti-pattern. Factory/Abstract-factory these are patterns that solves the problem of if-else.

If the code has nested and very huge if-else block that is where break the code and modularize the code.
*/


const inputPaymentTypeOCP = "CC";
const CCPaymentType = new CreditCardPayment();
const DCPaymentType = new DebitCardPayment();


const payserviceOCP = new PayServiceOCP(CCPaymentType);
payserviceOCP.processPayment(1000)