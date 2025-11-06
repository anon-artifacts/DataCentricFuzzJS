function TestWithProxies(a1, a2, a3) {
    function f4(a5) {
        const v8 = new Proxy({}, a5);
        return v8;
    }
    a1(a2, a3, f4);
}
function TestSet(a11, a12) {
    TestWithProxies(TestSet2, a11, a12);
}
function TestSet2(a16, a17, a18) {
    function f19() {
        return {};
    }
    var handler = { fix: f19 };
    var p1 = a18(handler);
    var p2 = a18(handler);
    var p3 = a18(handler);
    a17(p3);
    const v30 = new a16();
    var s = v30;
    s.add(p1);
    s.add(p2);
    s.has(p1);
    s.has(p2);
    s.has(p3);
    a17(p1);
    a17(p2);
    s.has(p1);
    s.has(p2);
    s.has(p3);
    s.delete(p2);
    s.has(p1);
    s.has(p2);
    s.has(p3);
}
TestSet(Set, Object.seal);
TestSet(Set, Object.freeze);
TestSet(Set, Object.preventExtensions);
function TestMap(a55, a56) {
    TestWithProxies(TestMap2, a55, a56);
}
function TestMap2(a60, a61, a62) {
    function f63() {
        return {};
    }
    var handler = { fix: f63 };
    var p1 = a62(handler);
    var p2 = a62(handler);
    var p3 = a62(handler);
    a61(p3);
    const v74 = new a60();
    var m = v74;
    m.set(p1, 123);
    m.set(p2, 321);
    m.has(p1);
    m.has(p2);
    m.has(p3);
    m.get(p1);
    m.get(p2);
    a61(p1);
    a61(p2);
    m.has(p1);
    m.has(p2);
    m.has(p3);
    m.get(p1);
    m.get(p2);
    m.delete(p2);
    m.has(p1);
    m.has(p2);
    m.has(p3);
    m.get(p1);
    m.get(p2);
}
TestMap(Map, Object.seal);
TestMap(Map, Object.freeze);
TestMap(Map, Object.preventExtensions);
TestMap(WeakMap, Object.seal);
TestMap(WeakMap, Object.freeze);
TestMap(WeakMap, Object.preventExtensions);
