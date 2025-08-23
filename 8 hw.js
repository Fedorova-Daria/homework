class Billing {
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal() {}
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }

  calculateTotal() {
    return this.amount * this.items;
  }
}
const fixed = new FixBilling(1000);
const hourly = new HourBilling(50, 5);
const perItem = new ItemBilling(10, 25);

console.log(`Фиксированный счет: ${fixed.calculateTotal()}`);
console.log(`Почасовой счет: ${hourly.calculateTotal()}`);
console.log(`Счет за элементы: ${perItem.calculateTotal()}`);
