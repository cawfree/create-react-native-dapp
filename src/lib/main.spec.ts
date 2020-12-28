import test from 'ava';

import { createReactNativeDapp } from './main';

test('createReactNativeDapp', async (t) => {
  t.true(typeof createReactNativeDapp === 'function');
});
