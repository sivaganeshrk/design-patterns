import test from 'ava';

import { Adaptee, Adapter, Target } from './adapter';

test('Adapter - Target', (t) => {
  const target = new Target();

  t.is(target.request(), "Target: The default target's behavior.");
});

test('Adapter - Adaptee', (t) => {
  const adaptee = new Adaptee();

  t.is(adaptee.specificRequest(), '.eetpadA eht fo roivaheb laicepS');
});

test('Adapter - Adapter', (t) => {
  const adapter = new Adapter(new Adaptee());

  t.is(adapter.request(), 'Special behavior of the Adaptee.');
});
