export class User {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  set name(n) {
    this.#name = n;
  }

  get age() {
    return this.#age;
  }

  set age(a) {
    this.#age = a;
  }
  toString() {
    return JSON.stringify({ 
        name: this.#name, 
        age: this.#age 
    });
  }
}
