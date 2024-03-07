type Base = 'classic' | 'thick' | 'thin' | 'garlic';

interface HasFormatter {
  format(): string;
}

class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {
    this.title = title;
    this.price = price;
  }
  get details(): string {
    return `${this.title} -${this.price} eur.`;
  }
  format() {
    return `this item ${this.title} and costs ${this.price} eur.`;
  }
}
function printFormatted(value: HasFormatter): void {
    console.log(value.format);
    
}

function printMenuItem(item: MenuItem, item2: MenuItem): void {
  console.log(item.details, item2.details);
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  base: Base = 'classic';
  toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizza = new Pizza('Domino', 35);
const pizzaSecond = new Pizza('Domino super', 10);
pizza.addTopping('mushrooms');

function addMushroomsToPizzas(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping('mushrooms');
    p.addTopping('olives');
  }
}
addMushroomsToPizzas([pizza, pizzaSecond]);

console.log(pizza, pizzaSecond);

printMenuItem(pizza, pizzaSecond);
