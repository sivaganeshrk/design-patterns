import { clientCode, ConcreteCreator1, ConcreteCreator2 } from './factory';

console.log(clientCode(new ConcreteCreator1()));
console.log(clientCode(new ConcreteCreator2()));
