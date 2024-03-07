"use strict";
let age = 29;
let firstName = 'Reda';
let itFake = false;
age = 30;
firstName = 'ona';
itFake = true;
let timeLeft = [30, 40, 50, 32];
let title = ['Reda is the best', 'Reda is great', 'Reda is smart'];
timeLeft.push(22, 25);
title.push('Reda is not crazy');
console.log(title);
let user = {
    logInName: 'Reda',
    id: 22,
    logIn: true,
};
user.logInName = 'Ana';
user.id = 5552;
console.log(user);
function suma(a, b) {
    return a + b;
}
const mathematic = (a, b) => {
    return a - b;
};
console.log('suma', suma(2, 5));
console.log('mathematic', mathematic(2, 2));
function mathematicReduce(item) {
    const result = item.reduce((a, b) => a + b, 0);
    console.log(result);
    return result;
}
mathematicReduce([1, 2, 3, 4]);
const firstFlower = {
    isBlum: false,
    title: 'snake plant',
    color: 'green',
    costumers: ['ana', 'john'],
    plantFamily: { size: 'big', lith: false },
};
function buyFlower(flower) {
    console.log(`Buy new ${flower.title}  is very ${flower.plantFamily.size}`);
}
buyFlower(firstFlower);
let flowers = [];
flowers.push(firstFlower);
console.log('labas');
//# sourceMappingURL=index.js.map