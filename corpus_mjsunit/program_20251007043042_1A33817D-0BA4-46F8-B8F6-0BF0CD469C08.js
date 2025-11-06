var errors = "";
var numTests = 0;
function test(a5) {
    var didThrow = false;
    try {
        var bad = a5(10);
    } catch(e11) {
        didThrow = true;
    }
    if (!didThrow) {
        errors += ("bad result: calling " + a5.name) + " as a function did not throw\n";
    }
    numTests++;
    if (typeof a5 !== "function") {
        errors += ((("bad result: typeof " + a5.name) + " is not function. Was ") + typeof a5) + "\n";
    }
    numTests++;
}
test(Int8Array);
test(Uint8Array);
test(Uint8ClampedArray);
test(Int16Array);
test(Uint16Array);
test(Int32Array);
test(Uint32Array);
test(Float32Array);
test(Float64Array);
test(Map);
test(Set);
test(WeakMap);
test(WeakSet);
test(ArrayBuffer);
test(DataView);
test(Promise);
test(Proxy);
let expectedNumTests = 34;
if (numTests != expectedNumTests) {
    errors += ((("Not all tests were run: ran " + numTests) + " out of ") + expectedNumTests) + " \n";
}
if (errors.length) {
    const v79 = new Error(errors);
    throw v79;
}
