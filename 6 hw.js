class Car {
  #mark;
  #model;
  #mileage;

  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(newMileage) {
    if (newMileage < this.#mileage) {
      console.error('Ошибка: Нельзя уменьшить пробег!');
      return;
    }

    this.#mileage = newMileage;
  }

  info() {
    console.log(
      `Марка: ${this.#mark}, Модель: ${this.#model}, Пробег: ${
        this.mileage
      } км.`
    );
  }
}
const myCar = new Car('Tesla', 'Model S', 80000);

myCar.info();
