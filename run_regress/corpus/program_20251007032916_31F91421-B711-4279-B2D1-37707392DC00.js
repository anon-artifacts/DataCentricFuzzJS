class C0 {
}
class C1 {
}
Object.assign(C1, C0);
C1.toString();
function f6() {
    function f(a8, a9, a10) {
        a8[a9] = a10;
    }
    f("make it generic", 0, 0);
    var o = { foo: "foo" };
    var s = f("priv");
    f(o, s, "private");
    f(o);
    var desc = Object.getOwnPropertyDescriptor(o, s);
    desc.value;
    desc.writable;
    desc.enumerable;
    desc.configurable;
}
f6();
