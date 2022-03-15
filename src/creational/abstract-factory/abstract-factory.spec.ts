import test from 'ava';

import DroidProducer from './abstract-factory';

test('AbstractFactory - BattleDrone', (t) => {
  t.is(new DroidProducer().getDrone('battle').info(), 'B1, Battle Droid');
});

test('AbstractFactory - PilotDrone', (t) => {
  t.is(new DroidProducer().getDrone('pilot').info(), 'Rx24, Pilot Droid');
});
