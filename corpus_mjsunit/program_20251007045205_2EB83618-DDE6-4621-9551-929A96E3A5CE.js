var g = true;
function get(a3) {
    if (g) {
        return 8;
    }
}
const v6 = {};
const v8 = new Proxy(v6, { get: get });
var p = v8;
var o2 = Object.create(p);
function test(a14, a15) {
    for (let i17 = 0; i17 < 3; i17++) {
        var v = a14.hello;
        if (g) {
        }
    }
}
g = false;
test(o2);
g = true;
test(o2);
