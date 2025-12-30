

interface PaymentProcessor {
    processCreditCard(amount: number) : void;
    processDebitCard(amount : number) : void;
    processPayPal(amount: number) : void;
    processBankTransfer(amount: number) : void;
}

class CreditCardPaymentProcessor implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`); // will have implementation here
    }
    processDebitCard(amount: number): void {
        throw new Error("Method not implemented."); // throw error here
    }
    processPayPal(amount: number): void {
        throw new Error("Method not implemented."); // throw error here
    }
    processBankTransfer(amount: number): void {
        throw new Error("Method not implemented."); // throw error here
    }
}

// The purpose of this class was just to process payment via Credit Card. 

// This is basically the client of this interface. The ISP principle says that while designing interface they should
// be short and have only segregated responsibility. Every class that is implementing this interface would be forced
// to implement all these interface whether they need or not.
// It is in iteself the violation of ISP. 
// How do we write this differently?
// Split this interface into smaller more specific interfaces. And then classes would be implementing only those
// interfaces which they would need.

interface orderProcessing{
    processOrder(): void;
    processPayment(): void;
    sendEmail(): void;
}



class orderProcessing implements orderProcessing {
    processOrder(): void {
        
    }
}

class EventProcessing implements orderProcessing {
    processPayment(): void {
        
    }
    processOrder(): void {
        
    }

    sendEmail(): void {
        
    }
}