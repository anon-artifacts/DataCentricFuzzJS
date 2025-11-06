console.log("Tests that out-of-bounds stores to a Uint8ClampedArray that are aliased to out-of-bounds loads don't crash.");
function foo(a4, a5, a6) {
    var result = a4[a5];
    a4[a5] = a6;
    return result;
}
for (let i10 = 0; i10 < 200; ++i10) {
    const v18 = new Uint8ClampedArray(1);
    var array = v18;
    foo(array, 100000000, 42);
}
