class Car {
  drive() {
    console.log("Araç sürülüyor...");
  }
}

class Truck {
  drive() {
    console.log("Kamyon sürülüyor...");
  }
  loadCargo() {
    console.log("Kargo yükleniyor...");
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  /* ??? */
  // Eğer araç 'Truck' ise 'loadCargo' metodunu çağırın
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}

const car = new Car();
const truck = new Truck();

useVehicle(car);
useVehicle(truck);

// BEKLENEN EKRAN ÇIKTISI:
// Araç sürülüyor...
// Kamyon sürülüyor...
// Kargo yükleniyor...