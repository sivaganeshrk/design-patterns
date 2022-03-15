import test from 'ava';

import { clientCode, ConcreteCreator1, ConcreteCreator2 } from './factory';

test('FactoryMethod - ConcreteCreator-1', (t) => {
  t.is(clientCode(new ConcreteCreator1()), 'ConcreteProduct1');
});

test('FactoryMethod - ConcreteCreator2', (t) => {
  t.is(clientCode(new ConcreteCreator2()), 'ConcreteProduct2');
});
