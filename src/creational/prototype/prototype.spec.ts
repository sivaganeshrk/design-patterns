import test from 'ava';

import { ComponentWithBackReference, Prototype } from './prototype';

test('Prototype - Components', (t) => {
  const p1 = new Prototype();
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();
  t.is(p1.component, p2.component);
});

test('Prototype - Primitives', (t) => {
  const p1 = new Prototype();
  p1.primitive = 123;

  const p2 = p1.clone();
  t.is(p1.primitive, p2.primitive);
});
