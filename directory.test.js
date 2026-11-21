import assert from 'node:assert/strict';
import { test } from 'node:test';
import { findOptions } from './directory.js';

test('gives a provider source for electronics repair in Kigali', () => {
  const result = findOptions({ area: 'Kigali', action: 'repair', category: 'electronics' });
  assert.equal(result.options[0].id, 'enviroserve');
  assert.match(result.options[0].source, /^https:\/\/enviroserve\.rw\//);
  assert.match(result.nextStep, /Verify/);
});

test('marks the Musanze announcement as historical and reports no evidence for repair', () => {
  const inputs = { area: 'Musanze', category: 'electronics' };
  assert.equal(findOptions({ ...inputs, action: 'recycle' }).options[0].sourceType, 'Historical government announcement');
  const result = findOptions({ ...inputs, action: 'repair' });
  assert.deepEqual(result.options, []);
  assert.match(result.nextStep, /No matching option/);
});

test('rejects free-form values outside the supported action schema', () => {
  assert.throws(() => findOptions({ area: 'Kigali', action: 'book', category: 'electronics' }), /Choose a listed/);
});
