function body() {
    function foo(a2) {
        return (a2?.length + a2?.byteLength) + a2?.byteOffset;
    }
    try { noInline(foo); } catch (e) {}
    let proto = {};
    let properties = ["length","byteLength","byteOffset"];
    function f17(a18) {
        const v20 = Int32Array?.prototype;
        let v21;
        try { v21 = v20.__lookupGetter__(a18); } catch (e) {}
        let getter = v21;
        const v23 = { get: getter };
        try { Object.defineProperty(proto, a18, v23); } catch (e) {}
    }
    try { properties.map(f17); } catch (e) {}
    function Bar() {
        return this;
    }
    Bar.prototype = proto;
    let v29;
    try { v29 = new Bar(); } catch (e) {}
    let bar = v29;
    let noThrow = false;
    for (let i34 = 0; i34 < 100000; i34++) {
        try {
            try { foo(bar); } catch (e) {}
            noThrow = true;
        } catch(e42) {
        }
        if (noThrow) {
            throw "broken";
        }
    }
}
try { body(); } catch (e) {}
