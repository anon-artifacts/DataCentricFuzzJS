function f0() {
}
function test(a2) {
    function C() {
    }
    C.prototype = [];
    if (a2) {
        const t7 = C.prototype;
        t7.constructor = C;
    }
    const v6 = new C();
    c = v6;
    c.push("foo");
    return c.length;
}
test(true);
test(false);
var a = [];
a.slowify = 1;
var b = Object.create(a);
b.length = 12;
b.length;
var b = Object.create(Array.prototype);
b.length = 12;
b.length;
f0(true, true);
