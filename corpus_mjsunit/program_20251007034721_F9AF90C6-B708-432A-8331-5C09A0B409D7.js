var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var done = false;
var iterable = {};
function* f14() {
    yield [k1,v1];
    yield [k2,v2];
    done = true;
}
iterable[Symbol.iterator] = f14;
const v23 = new WeakMap(iterable);
var m = v23;
m.has(k1);
m.has(k2);
m.has(k3);
m.get(k1);
m.get(k2);
m.get(k3);
