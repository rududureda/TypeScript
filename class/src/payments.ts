import { CSVWriter } from './CSVWriter';

export interface Payment {
  id: number;
  price: number;
  receiver: string;
  purpose: string;
}
const writer = new CSVWriter(['id', 'price', 'receiver', 'purpose']);

writer.addLine([
  { id: 1, price: 30, receiver: 'Bobby', purpose: 'gift' },
  { id: 2, price: 160, receiver: 'Tom', purpose: 'consultation' },
]);
console.log(5555);

writer.save('./data/payments.csv');
