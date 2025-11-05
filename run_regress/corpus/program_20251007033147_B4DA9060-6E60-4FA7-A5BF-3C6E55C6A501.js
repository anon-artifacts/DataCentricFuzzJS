function f0(a1) {
    return ["a","b"];
}
function f5(a6, a7) {
    return { enumerable: true, configurable: true };
}
function f11(a12, a13) {
    return 1;
}
var handler = { ownKeys: f0, getOwnPropertyDescriptor: f5, get: f11 };
const v19 = new Proxy({}, handler);
var proxy = v19;
var o = {};
Object.assign(o, proxy);
const v27 = { a: 1, b: 1 };
function TestStringSources() {
    var source = "abc";
    var target = {};
    Object.assign(target, source);
    const v37 = { 0: "a", 1: "b", 2: "c" };
}
TestStringSources();
