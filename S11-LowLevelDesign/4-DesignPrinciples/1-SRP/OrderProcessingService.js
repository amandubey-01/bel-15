class OrderProcessingService {
    create(orderDetails){
        // Logic to create an order
        console.log('Order Created', orderDetails);
    }

    processPayments(orderId, paymentDetails){
        // Logic to process payments 
        // CC, DC
        console.log("Payment Done", paymentDetails, orderId);
    }

    sendEmailConfirmation(orderId, email){
        // Logic to send Email confirmation
        // Connect to some SMTP server
        // fetch email templates
        // fetch customer data for order
        // send the email

        console.log("Payments done", orderId, email)
    }
}

/* Responsibility:
Managing orders
Managing Payments
Managing emails
This would be problematic. Why ? --> Lets say we as of now supports debit card and credit card for payments and want 
to add UPI method to make payments. We have to go and change OrderProcessingService. 
Some days later he want to add support for sending messages confiramtion in addition to email confirmation. We have to
change the OrderProcessingService again. And then wants to add support for whatsapp. We have to again come to 
OrderProcessingService and change the code.
Since this class OrderProcessingService has multiple responsibility, slightest change in responsibility would alter
this class. This is problematic bcz in real world sceanrio this class could span across thousand lines or even more.
And this would become one of the bottleneck.

We are processing order, keeping payments here, and sending mail here. What if for a promotional event we want to 
send emails, we would have similar kind of implementation in that promotiona event class. 

Similarly, let's say this is for Zomato. Zomato is processing order that is the core business. It makes sense to keep
payment here. But later let's say Zomato start selling other things. Like they may sell some subscription. So we have
to write those classes and reimplement the processPayment there also. That in itself violates the other principle,
DRY. But the idea is that is being violated as we are not following SRP.

So, if I am writing OrderProcessingService, so it should just have methods or attributes related to Orders. Everything
other could be abstracted in reference service or different class.
*/
