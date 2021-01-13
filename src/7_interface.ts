interface Switchable {
  on(): void;
  off(): void;
}

class Lenovo implements Switchable {
  on(): void {
    console.log("Laptop turn on");
  }
  off(): void {
    console.log("Laptop turn off");
  }
}

let lenovoLaptop = new Lenovo();

lenovoLaptop.on();
lenovoLaptop.off();
