import crypto from 'node:crypto';
import { decrypt, encrypt } from './crypto';
import assert from 'node:assert';

describe('Crypto Test', () => {
  it('encrypt & decrypt', () => {
    const randomKey = crypto.randomBytes(32);

    const firstOne = encrypt(randomKey, 'testValue');
    const secondOne = encrypt(randomKey, 'testValue');

    assert.notEqual(firstOne, secondOne);
    assert.equal(decrypt(randomKey, firstOne), decrypt(randomKey, secondOne));
  });
  it('encrypt & decrypt failed', () => {
    const randomKey = crypto.randomBytes(32);
    const randomKey2 = crypto.randomBytes(32);

    const firstOne = encrypt(randomKey, 'testValue');
    const secondOne = encrypt(randomKey, 'testValue');

    assert.notEqual(firstOne, secondOne);
    assert.throws(() => decrypt(randomKey2, firstOne));
  });
});
