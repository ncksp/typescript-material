abstract class Vehicle {
    startEngine(): void{
        console.log("Start Engine")
        this.engineStarted()
    }
    protected abstract engineStarted(): void
    abstract getWheels(): number
}

class Car extends Vehicle{
    protected engineStarted(): void {
        console.log("Brummm")
    }
    getWheels(): number {
        return 4
    }
}

class Motorcycle extends Vehicle {
    protected engineStarted(): void {
        console.log("Emberrr");
    }
    getWheels(): number {
        return 2
    }
}

let car = new Car()
let motor = new Motorcycle()

motor.startEngine()
