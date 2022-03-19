import { ComponentWithBackReference, Prototype } from './prototype';

const p1 = new Prototype();
p1.primitive = 245;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();
console.log(p2.component);
console.log(p1.component);

console.log(p2.primitive);
console.log(p1.primitive);
