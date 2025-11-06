function test0() {
    o.p *= x;
    const v3 = !x;
    o.p *= x;
    const v8 = v3 ? Math.atan(!x) : 1;
    function f9() {
    }
    f9(v8);
}
var o = {};
var x = 1;
o.p = 100;
o.p = test0();
test0();
print(o.p);
