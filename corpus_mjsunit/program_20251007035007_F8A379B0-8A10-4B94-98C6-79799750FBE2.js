function body() {
    function foo(a2) {
        return a2?.length;
    }
    try { noInline(foo); } catch (e) {}
    function bar(a7) {
        return a7?.byteLength;
    }
    try { noInline(bar); } catch (e) {}
    function baz(a11) {
        return a11?.byteOffset;
    }
    try { noInline(baz); } catch (e) {}
    let v16;
    try { v16 = new Int32Array(10); } catch (e) {}
    let array = v16;
    let properties = ["length","byteLength","byteOffset"];
    function f23(a24) {
        const v25 = Int32Array?.prototype;
        let v26;
        try { v26 = v25.__lookupGetter__(a24); } catch (e) {}
        let getter = v26;
        const v29 = { get: getter, configurable: true };
        try { Object.defineProperty(array, a24, v29); } catch (e) {}
    }
    try { properties.map(f23); } catch (e) {}
    for (let i34 = 0; i34 < 100000; i34++) {
        try { foo(array); } catch (e) {}
    }
    function f41(a42) {
        const v44 = { value: null };
        try { Object.defineProperty(array, a42, v44); } catch (e) {}
    }
    try { properties.map(f41); } catch (e) {}
    let v48;
    try { v48 = foo(array); } catch (e) {}
    if (v48 !== null) {
        throw "length should have been null";
    }
    let v52;
    try { v52 = bar(array); } catch (e) {}
    if (v52 !== null) {
        throw "byteLength should have been null";
    }
    let v56;
    try { v56 = baz(array); } catch (e) {}
    if (v56 !== null) {
        throw "byteOffset should have been null";
    }
}
try { body(); } catch (e) {}
