"use strict";
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} -${this.price} eur.`;
    }
    format() {
        return `this item ${this.title} and costs ${this.price} eur.`;
    }
}
function printFormatted(value) {
    console.log(value.format);
}
function printMenuItem(item, item2) {
    console.log(item.details, item2.details);
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('Domino', 35);
const pizzaSecond = new Pizza('Domino super', 10);
pizza.addTopping('mushrooms');
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
        p.addTopping('olives');
    }
}
addMushroomsToPizzas([pizza, pizzaSecond]);
console.log(pizza, pizzaSecond);
printMenuItem(pizza, pizzaSecond);
//# sourceMappingURL=index.js.map