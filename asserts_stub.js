if (typeof assertEquals  !== 'function') globalThis.assertEquals  = () => {};
if (typeof assertTrue    !== 'function') globalThis.assertTrue    = () => {};
if (typeof assertFalse   !== 'function') globalThis.assertFalse   = () => {};
if (typeof assertThrows  !== 'function') globalThis.assertThrows  = () => {};
if (typeof assertInstanceof  !== 'function') globalThis.assertInstanceof  = () => {};
if (typeof assertMatches  !== 'function') globalThis.assertMatches  = () => {};
// In asserts_stub.js
function ToPromising(x) {
  if (typeof x === 'function') {
    // Return a wrapper function that returns a Promise
    return function(...args) {
      try {
        return Promise.resolve(x(...args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  return Promise.resolve(x);
}