import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const originalReference = {
  bytes: 157493,
  sha256: '1705c8b0b180d9b8296584a18e88f4f7174e9928d1957294c9f6c7c7cdbb6b2d',
};
const digest = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
const source = await fs.readFile(new URL('../src/App.tsx', import.meta.url));
const manifestText = await fs.readFile(new URL('./authorized-source-changes.json', import.meta.url), 'utf8');
const manifest = JSON.parse(manifestText);
const sourceText = source.toString('utf8');

assert.deepEqual(manifest.original, originalReference, 'The original reference identity must remain unchanged.');
assert.equal(source.length, manifest.current.bytes, 'The authorized component byte count changed.');
assert.equal(digest(source), manifest.current.sha256, 'App.tsx differs from the authorized portfolio content and presentation manifest.');
assert.doesNotMatch(sourceText, /(?:drive|docs)\.google\.com/i, 'Public component source must not contain Drive or Docs URLs.');
assert.doesNotMatch(manifestText, /(?:drive|docs)\.google\.com/i, 'The public change manifest must not contain Drive or Docs URLs.');
assert.ok(Array.isArray(manifest.changes) && manifest.changes.length > 0, 'Authorized source replacements are required.');

// Undo the reviewed replacements in reverse application order. Matching the
// original byte hash verifies the complete baseline outside the exact reviewed
// content additions and presentation changes, including SVG and layout updates.
let reconstructed = sourceText;
for (const [index, change] of [...manifest.changes].reverse().entries()) {
  assert.equal(typeof change.before, 'string', 'Replacement source must be literal text.');
  assert.equal(typeof change.after, 'string', 'Replacement result must be literal text.');
  assert.ok(change.before.length > 0 && change.after.length > 0, 'Empty replacements are not allowed.');
  assert.ok(Number.isInteger(change.occurrences) && change.occurrences > 0, 'Replacement occurrences must be positive integers.');
  const parts = reconstructed.split(change.after);
  assert.equal(parts.length - 1, change.occurrences, `Authorized reverse replacement ${index + 1} has an unexpected occurrence count.`);
  reconstructed = parts.join(change.before);
}

const reconstructedBytes = Buffer.from(reconstructed, 'utf8');
assert.equal(reconstructedBytes.length, originalReference.bytes, 'Reversing authorized changes did not restore the original byte count.');
assert.equal(digest(reconstructedBytes), originalReference.sha256, 'Reversing authorized changes did not restore the complete original component.');
console.log(`Authorized portfolio component verified: ${source.length} bytes, SHA256 ${digest(source)}`);
console.log(`Reconstructed original verified: ${reconstructedBytes.length} bytes, SHA256 ${digest(reconstructedBytes)}`);
console.log(`${manifest.changes.length} authorized App replacements; no public Drive or Docs URLs.`);
