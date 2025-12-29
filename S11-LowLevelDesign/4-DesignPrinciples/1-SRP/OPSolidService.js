class OrderProcessingService {

    // lets say the OrderProcessingService takes PaymentServie and NotificatioServie 
    constructor (paymentService, notificationService){
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }


    create(orderDetails){
        // Logic to create an order
        console.log('Order Created', orderDetails);
    }

    processPayments(orderId, paymentDetails){
        // we don't care about payment logic anymore
        this.paymentService.processPayments(orderId, paymentDetails);
        console.log("Payment Done", paymentDetails, orderId);
    }

    sendEmailConfirmation(orderId, email){
        // Logic to send Email confirmation
        // Connect to some SMTP server
        // fetch email templates
        // fetch customer data for order
        // the above two steps gets the content
        // send the email
        this.notificationService.sendEmail(email, content)
        console.log("Payments done", orderId, email)
    }
}

class PaymentService {
    processPayments(orderId, paymentDetails){
        // All logic related to payments.
    }
}
// Any change related to payments would remain this class only the OrderProcessingSerice would not be impacted.

class NotificationService {
    sendEmail (emailid, content){

    }
    sendSMS(number, content){

    }
    // lets say we want to implement whatsapp notification implement it here.
}

// So now we have broken down everything wherein OrderProcessingService class performs one activity that is related to
// activity, Payments and Notifications has been delegated to different class. 

// If there is any change in orders let's say the tax rate changes we may have to change OrderProcessingService but
// for anychange in Notification and Payments it won't need a change.