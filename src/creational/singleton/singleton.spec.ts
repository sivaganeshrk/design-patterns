import test from 'ava';

import { Singleton } from './singleton';

test('Singleton', (t) => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  t.is(s1, s2);
});
