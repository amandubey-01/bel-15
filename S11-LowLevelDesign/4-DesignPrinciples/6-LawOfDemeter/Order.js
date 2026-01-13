class Address {
    constructor(street, city){
        this.street = street;
        this.city = city;
    }

    getCity(){
        return this.city;
    }
}

// Has a (Weak)
class Customer {
    constructor (name, address, currentAddress){
        this.name = name;
        this.address = address;
        this.currentAddress = currentAddress;
    }

    getAddress(){
        return this.currentAddress;
    }

    getPermanentAddress(){
        return this.address;
    }   
}

class Order {
    constructor (customer) {
        this.customer = customer;
    }
    printShippingCity(){
        console.log(this.customer.address.city);
    }
}

class OrderLOD {
    constructor (customer) {
        this.customer = customer;
    }
    printShippingCity(){
        console.log(this.customer.getAddress);
    }
}
// Since someone else owns the Customer class, Order isn't aware of the change. Initially order is processing current 
// address.But then something changed in the behaviour. But the order is written in such a way that Order is trying
// to access something from the relationship of Customer. It will not solve the actual business problem. 
// This is law of demeter, which prohibits you accessing any object one level above the hierarchy. We can access 
// among ourselves anything passed as parameters or a level up not beyond that. 
// Following LOD, it won't break as the responsibility of getting the city now lies with Customer class and address is
// just one level above the customer class.