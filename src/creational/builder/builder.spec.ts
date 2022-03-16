import test from 'ava';

import { ConcreteBuilder1, Director } from './builder';

test('Factory - ConcreteBuilder1', (t) => {
  const builder = new ConcreteBuilder1();

  builder.productPartA();

  t.is(builder.getProduct().listParts(), 'Product parts: PartA1');
});

test('Factory - Director - buildMinimalValueProduct', (t) => {
  const director = new Director();

  const builder = new ConcreteBuilder1();

  director.setBuilder(builder);
  director.buildMinimalValueProduct();
  t.is(builder.getProduct().listParts(), 'Product parts: PartA1');
});

test('Factory - Director - buildFullFeaturedProduct', (t) => {
  const director = new Director();

  const builder = new ConcreteBuilder1();

  director.setBuilder(builder);
  director.buildFullFeaturedProduct();
  t.is(
    builder.getProduct().listParts(),
    'Product parts: PartA1, PartB1, PartC1'
  );
});
