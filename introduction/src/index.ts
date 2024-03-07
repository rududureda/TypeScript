let age: number = 29;
let firstName: string = 'Reda';
let itFake: boolean = false;

age = 30;
firstName = 'ona';
itFake = true;

//MASYVAI//

let timeLeft: number[] = [30, 40, 50, 32];
let title: string[] = ['Reda is the best', 'Reda is great', 'Reda is smart'];

timeLeft.push(22, 25);
title.push('Reda is not crazy');

console.log(title);

//Objektai//

let user: { logInName: string; id: number; logIn: boolean } = {
  logInName: 'Reda',
  id: 22,
  logIn: true,
};
user.logInName = 'Ana';
user.id = 5552;

console.log(user);

//FUNKCIJOS//

function suma(a: number, b: number): number {
  return a + b;
}

const mathematic = (a: number, b: number): number => {
  return a - b;
};

console.log('suma', suma(2, 5));
console.log('mathematic', mathematic(2, 2));

function mathematicReduce(item: number[]) {
  const result = item.reduce((a, b) => a + b, 0);
  console.log(result);
  return result;
}

mathematicReduce([1, 2, 3, 4]);

//INTERFACES//
interface Plant {
  size: string;
  lith: boolean;
}

interface Flowers {
  title: string;
  color: string;
  isBlum: boolean;
  costumers: string[];
  plantFamily: Plant;
}

const firstFlower: Flowers = {
  isBlum: false,
  title: 'snake plant',
  color: 'green',
  costumers: ['ana', 'john'],
  plantFamily: { size: 'big', lith: false },
};

function buyFlower(flower: Flowers): void {
  console.log(`Buy new ${flower.title}  is very ${flower.plantFamily.size}`);
}
buyFlower(firstFlower);

let flowers: Flowers[] = [];
flowers.push(firstFlower);
console.log('labas');
