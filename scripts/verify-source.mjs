import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const source = await fs.readFile(new URL('../src/App.tsx', import.meta.url));
const sha256 = crypto.createHash('sha256').update(source).digest('hex');
assert.equal(source.length, 157493, 'The reference component byte count changed.');
assert.equal(
  sha256,
  '1705c8b0b180d9b8296584a18e88f4f7174e9928d1957294c9f6c7c7cdbb6b2d',
  'App.tsx must remain byte-identical to the supplied reference.',
);
assert.doesNotMatch(source.toString('utf8'), /(?:drive|docs)\.google\.com/i);
console.log(`Reference component verified: ${source.length} bytes, SHA256 ${sha256}`);
