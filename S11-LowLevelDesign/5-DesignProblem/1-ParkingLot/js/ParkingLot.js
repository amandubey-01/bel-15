class ParkingLot {
    constructor (parkingLotId, parkingLotName, address, totalFloors, entryPanel, exitPanel){
        this.parkingLotId = parkingLotId;
        this.parkingLotName = parkingLotName;
        this.address = address;
        this.totalFloors = totalFloors;
        this.entryPanel = entryPanel;
        this.exitPanel = exitPanel;
        this.parkingFloors = [];
    }

    isFull(){
        return this.parkingFloors.every(floor => floor.isFull());
    }

    addParkingFloor(parkingFloor){
        this.parkingFloors.push(parkingFloor);
    }

    parkVehicle(vehicle) {
        const parkingSpot = this.entryPanel.computeFloortoBeParkedOn(this.parkingFloors, vehicle.getVehicleType());
        const ticket = this.entryPanel.generateParkingTicket(vehicle, parkingFloor, parkingSpot);
        console.log(`Vehicle ${vehicle.getVehicleId()} parked on ${parkingFloor.getFloorName()} with ticketId ${ticket.getTicketId()}`);
        return ticket;
    }
    // Although, we have the ability to park Vehilce in ParkingLot class the entire logic should not reside in the
    // ParkingLot itself. 


    exitVehicle(ticket) {
        const updatedTicket = this.exitPanel.checkout(ticket);
        console.log(`Vechicle exited with ticketId ${updatedTicket.getTicketId()} amount ${updatedTicket.getAmount()}`);
    }
}

