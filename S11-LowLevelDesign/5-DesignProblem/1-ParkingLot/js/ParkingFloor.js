class ParkingFloor {
    constructor(floorName){
        this.floorName = floorName;
        this.spots = [];
        /*
        While discussing we wanted a Stron HAS-A relationship with the spots. Technically, it makes sense, but in 
        good design we prefer dependency injection. In dependency injection we always try to get a class from outside.

        In the Parking Floor class, have some spots but when the ParkingFloor class is constructed we will take spots
        from outside and construct this class. 
        */
    }


    addSpot(spot) {
        this.spots.push(spot);
    }

    getAvailableSpotForVehicle(){
        for(let i = 0; i < this.spots.length; i++){
            if(!this.spots[i].isOccupied){
                return this.spots[i];
            }
        }
        return null;
    }

    isFull(){
        return this.spots.every(spot => spot.isOccupied);
    }

    getFloorName(){
        return this.floorName;
    }
}

