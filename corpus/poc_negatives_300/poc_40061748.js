
const ab = new ArrayBuffer(4, {"maxByteLength": 100});
const ta = new Int8Array(ab);
const rab = new ArrayBuffer(864, {"maxByteLength": 2000});
const lengthTracking = new Int8Array(rab);
rab.resize(0);
ta.constructor = { [Symbol.species]: function() { return lengthTracking; } };
ta.filter(() => { return true; }); // << Using filter instead of slice

//The fix was incorrect, the right place to fix this is in TypedArraySpeciesCreateByLength (it was reading the length incorrectly).

//I though I'm setting the length of length tracking TAs to 0 but apparently not; I'll need to see where that has regressed.