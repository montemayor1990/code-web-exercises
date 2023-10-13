// const createDog = (year, make, model, color) => {
//
// };



class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    sold() {
        console.log(`The ${this.color}${this.year} ${this.make} ${this.model} sold`)
    }
    brokeDown() {
        console.log(`The ${this.color}${this.year} ${this.make} ${this.model} broke down`)
    }
}

let car1 = new Car(2015, "Toyota", "tundra", "metalic grey ")
car1.sold()

let car2 = new Car(2015, "Toyota", "Tundra", "metalic grey ")
car2.brokeDown()