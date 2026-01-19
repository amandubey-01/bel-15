const ParkingTicket = require('./[Pattern]ParkingTicket');
const parkingSpotType = require('./ParkingSptType');

class EntryPanel {
    computeFloorToBeParkedOn(parkingFloors, vehicleType){
        for (let floors of parkingFloors){
            if(!floors.isFull()){
                return floors;
            }
        }
        return null;
    }

    generateParkingTicket(vehicle, parkingFloor) {
        const ticketId = `${vehicle.getVehicleID()}-${new Date().getTime()}`;
        const spot = parkingFloor.getAvailableSpotForVehicle();
        const ticket = new ParkingTicket(ticketId, vehicle, spot);
        spot.parkVehicle(vehicle);
        return ticket;
    }

    generateSpotTypeBasedOnVehicleType(vehicleType) {
        // Logic to generate spot type based on vehicle type
        switch (vehicleType) {
            case 'ELECTRIC':
                return ParkingSpotType.ELECTRIC;
            case 'HANDICAPPED':
                return ParkingSpotType.HANDICAPPED;
            default:
                return ParkingSpotType.REGULAR;
        }
    }
}

