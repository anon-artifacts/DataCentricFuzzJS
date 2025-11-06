var typedArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
var lengthCalled = false;
function lengthValue() {
    lengthCalled = true;
    return 5;
}
function f16() {
    return 4.6;
}
function f18() {
    return -5;
}
function f21() {
    return NaN;
}
function f23() {
    return "5";
}
function f25() {
    return "abc";
}
function f27() {
    return true;
}
function f29() {
    return null;
}
function f31() {
    return undefined;
}
var goodNonIntegerLengths = [f16,f18,f21,f23,f25,f27,f29,f31];
function badNonIntegerLength() {
    return Symbol("5");
}
for (const v39 of typedArrayConstructors) {
    lengthCalled = false;
    const v42 = new v39(10);
    var a = v42;
    const v44 = { valueOf: lengthValue };
    a.set({ length: v44 });
    for (const v47 of goodNonIntegerLengths) {
        const v48 = { valueOf: v47 };
        a.set({ length: v48 });
    }
    function f51() {
        const v52 = { valueOf: badNonIntegerLength };
        const v53 = { length: v52 };
        try { a.set(v53); } catch (e) {}
    }
    f51();
}
