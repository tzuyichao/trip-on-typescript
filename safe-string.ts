class Vehicle {
  public vehicleType: 'four wheeler' | 'two wheeler';

}

const vehicle = new Vehicle();
vehicle.vehicleType = 'four wheeler';
//vehicle.vehicleType = 'Car'; // Type '"Car"' is not assignable to type '"four wheeler" | "two wheeler"'.
if(typeof vehicle.vehicleType === 'string') {
    console.log('vehicleType is string');
    console.log(vehicle.vehicleType);
}