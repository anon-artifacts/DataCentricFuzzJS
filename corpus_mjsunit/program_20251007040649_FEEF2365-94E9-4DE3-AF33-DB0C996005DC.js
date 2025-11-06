var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var done = false;
function* data() {
    yield [k1,v1];
    yield [k2,v2];
    done = true;
}
const v20 = new WeakMap(data());
m = v20;
m.has(k1);
m.has(k2);
m.has(k3);
m.get(k1);
m.get(k2);
m.get(k3);
