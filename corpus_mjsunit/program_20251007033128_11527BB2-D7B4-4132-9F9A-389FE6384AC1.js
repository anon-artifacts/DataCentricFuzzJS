function Unboxed() {
    this.a = 0;
    this.b = true;
}
function tryCreateUnboxedObject() {
    var obj;
    for (let i9 = 0; i9 < 1000; ++i9) {
        let v15;
        try { v15 = new Unboxed(); } catch (e) {}
        obj = v15;
    }
    let v17;
    try { v17 = unboxedObjectsEnabled(); } catch (e) {}
    if (v17) {
        try { isUnboxedObject(obj); } catch (e) {}
    }
    return obj;
}
function basic() {
    let v22;
    try { v22 = tryCreateUnboxedObject(); } catch (e) {}
    var unboxed = v22;
    var target = {};
    try { Object.assign(target, unboxed); } catch (e) {}
    const v30 = { a: 0, b: true };
    target = { a: 1, c: 3 };
    try { Object.assign(target, unboxed); } catch (e) {}
    const v38 = { a: 0, c: 3, b: true };
}
function expando() {
    let v40;
    try { v40 = tryCreateUnboxedObject(); } catch (e) {}
    var unboxed = v40;
    unboxed.c = 3.5;
    var target = {};
    try { Object.assign(target, unboxed); } catch (e) {}
    const v50 = { a: 0, b: true, c: 3.5 };
    target = { a: 1, d: 3 };
    try { Object.assign(target, unboxed); } catch (e) {}
    const v59 = { a: 0, d: 3, b: true, c: 3.5 };
}
function addExpando() {
    let v61;
    try { v61 = tryCreateUnboxedObject(); } catch (e) {}
    var unboxed = v61;
    function setA(a64) {
        unboxed.c = 3.5;
    }
    var target = {};
    const v70 = { set: setA };
    try { Object.defineProperty(target, "a", v70); } catch (e) {}
    var reference = {};
    const v76 = { set: setA };
    try { Object.defineProperty(reference, "a", v76); } catch (e) {}
    const v83 = { value: true, enumerable: true, configurable: true, writable: true };
    try { Object.defineProperty(reference, "b", v83); } catch (e) {}
    try { Object.assign(target, unboxed); } catch (e) {}
}
function makeNative() {
    let v87;
    try { v87 = tryCreateUnboxedObject(); } catch (e) {}
    var unboxed = v87;
    function setA(a90) {
        const v94 = { writable: false };
        try { Object.defineProperty(unboxed, "a", v94); } catch (e) {}
    }
    var target = {};
    const v100 = { set: setA };
    try { Object.defineProperty(target, "a", v100); } catch (e) {}
    var reference = {};
    const v106 = { set: setA };
    try { Object.defineProperty(reference, "a", v106); } catch (e) {}
    const v113 = { value: true, enumerable: true, configurable: true, writable: true };
    try { Object.defineProperty(reference, "b", v113); } catch (e) {}
    try { Object.assign(target, unboxed); } catch (e) {}
}
try { basic(); } catch (e) {}
try { expando(); } catch (e) {}
try { addExpando(); } catch (e) {}
try { makeNative(); } catch (e) {}
