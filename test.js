import { describe, it, test } from 'node:test';

describe('describe-only-false', {only: false}, () => {
  it('only false in describe');
});

describe('it-only-false', () => {
  it('only false in test', {only: false});
});

describe('no-only', () => {
  it('no only');
});

test('test-only-false', {only: false}, (t) => {
  t.test('only false in test');
});

test('t.test-only-false', (t) => {
  t.test('only false in test', {only: false});
});

test('no-only', (t) => {
  t.test('no only');
});
