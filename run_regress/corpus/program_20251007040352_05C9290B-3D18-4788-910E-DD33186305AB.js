async function f0() {
    await 10;
}
g = f0;
g.prototype;
g();
g.prototype;
function* f10() {
    yield 10;
}
gen = f10;
(gen.prototype != undefined) && (gen.prototype != null);
gen();
(gen.prototype != undefined) && (gen.prototype != null);
async function* f30() {
    yield 10;
}
async_gen = f30;
(async_gen.prototype != undefined) && (async_gen.prototype != null);
async_gen();
(async_gen.prototype != undefined) && (async_gen.prototype != null);
function foo(a51) {
    return a51 instanceof Proxy;
}
function test_for_exception() {
    caught_exception = false;
    try {
        foo({});
    } catch(e59) {
        caught_exception = true;
        e59.message;
    } finally {
    }
}
test_for_exception();
test_for_exception();
test_for_exception();
const v69 = Function.prototype;
const t38 = Proxy.__proto__;
t38.prototype = v69;
const v72 = () => {
};
v72 instanceof Proxy;
const v74 = {};
const v78 = {
    get(a76, a77) {
        return a77;
    },
};
const v79 = new Proxy(v74, v78);
v79.test;
const v83 = { b: 2 };
Proxy.__proto__ = { prototype: v83, a: 1 };
Proxy.prototype;
const v88 = { b: 2 };
function testProxyCreationContext() {
    const v90 = {};
    const v92 = new Proxy(v90, {});
    let p1 = v92;
}
testProxyCreationContext();
