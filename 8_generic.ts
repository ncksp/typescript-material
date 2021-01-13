import { User } from "./5_class";

class List<T> {
  private _data: T[];

  constructor(...el: T[]) {
    this._data = el;
  }

  add(el: T): void {
    this._data.push(el);
  }
  addAll(...el: T[]): void {
    this._data.push(...el);
  }
  get(index: number): T {
    return this._data[index];
  }
  getAll(): T[] {
    return this._data;
  }
  remove(index: number): void {
    if (index < 0 || index > this._data.length - 1)
      throw new Error("Index out of bound");

    this._data.splice(index, 1);
  }
}

let data = new List<string | number | boolean | object>();
data.add("Nicko1")
data.add(1234)
data.add(true)
data.add({data: new User("nicko")})

console.log(data);

///generic in function
function itsMe<T>(value: T) {
  return value;
}

const itsMeArrow = <T>(value: T) => {
  return value;
};

console.log(itsMe(new User("nicko")));
console.log(itsMeArrow(new User("nicko")));

