function module(a1, a2, a3) {
    var clz = a1.Math.clz32;
    function f1(a8) {
        return clz(a8 = a8 | 0);
    }
    function f2() {
        return clz(0);
    }
    function f3() {
        return clz(2147483648);
    }
    function f4() {
        return clz(32768);
    }
    function f5() {
        return clz(NaN);
    }
    function f6() {
        return clz(Infinity);
    }
    function f7() {
        return clz(undefined);
    }
    function f8() {
        return clz(true);
    }
    function f9() {
        return clz();
    }
    const v35 = {
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
        f5: f5,
        f6: f6,
        f7: f7,
        f8: f8,
        f9: f9,
    };
    return v35;
}
var global = this;
var env = {};
const v44 = new ArrayBuffer(1 << 20);
var heap = v44;
var m = module(global, env, heap);
print(m.f1(0));
print(m.f1(0));
print(m.f1(2147483648));
print(m.f1(32768));
print(m.f1(NaN));
print(m.f1(Infinity));
print(m.f1(undefined));
print(m.f1(true));
print(m.f2());
print(m.f2());
print(m.f3());
print(m.f3());
print(m.f4());
print(m.f4());
print(m.f5());
print(m.f5());
print(m.f6());
print(m.f6());
print(m.f7());
print(m.f7());
print(m.f8());
print(m.f8());
print(m.f9());
print(m.f9());
