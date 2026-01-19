class ParkingSpot {
    constructor(spotId, spotType){
        this.spotId = spotId;
        this.spotType = spotType;
        this.isOccupied = false;
        this.vehicle = null;
    }

    isOccupied() {
        return this.isOccupied;
    }

    // Setter injection
    parkVehicle(vehicle){
        if(this.isOccupied) {
            console.log("Parking Spot is already occupied.");
            return false;
        }
        this.vehicle = vehicle;
        this.isOccupied = true;
        console.log(`Vehilce ${vehicle.getVehicleId()} parked in ${this.spotId}`);
        return true;
    }

    removeVehicle() {
        if (!this.isOccupied) {
        console.log("Parking spot is already empty.");
        return false;
        }
        console.log(`Vehicle ${this.vechicle.getVehicleId()} removed from ${this.spotName}`);
        this.vechicle = null;
        this.isOccupied = false;
        return true;    
    }

    getSpotName() {
        return this.spotId;
    }

    getSpotType() {
        return this.spotType;
    }
    getVehicle() {
        return this.vechicle;
    }
}

module.exports = ParkingSpot;
