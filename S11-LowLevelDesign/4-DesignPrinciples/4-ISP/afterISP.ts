interface CreditCardPaymentProcessor {
    processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
    processDebitCard(amount: number): void;
}

interface PayPalPaymentProcessor {
    processPayPal(amount: number): void;
}

interface BankTransferPaymentProcessor {
    processBankTransfer(amount: number): void;
}

class CreditCardPayment implements CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class DebitCardPayment implements DebitCardPaymentProcessor {
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
}

class PayPalPayment implements PayPalPaymentProcessor {
    processPayPal(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

export{}

/*
It is broken down into one abstract method for interface but ideally interface there would be more than one abstract
method. 
When the interface is pretty large lets say 20-30 different abstract methods, then we should divide interfaces in 
small groups which club some sort of logic activity.

*/

/*
For implementing abstraction we have two ways either abstract classes or interfaces. We use interfaces when we know 
that each of the implementing class has a very high probability that the behavior would be different. 
Whereas we take class based or inheritance based way wherein we are sure that the child classes would have similar
implementation. 
If lets say 90% of the child classes gonna have same implementation we will use class based or inheritance.
Other 10% will be done by method overriding.
And if 90% of the classes gonna have different behavior/implementation we will take interface route. And for 10%
of the times there will be code duplication.  
*/
/*
This is applicable only when you are working with interfaces.
The key idea is that when designing interfaces it shouldn't be pretty large. It also conforms to SRP. 
Logically divide your interfaces so that it can process one responsibility. 
Any class implementing those responibility may not have to do some dummy implementation.
*/