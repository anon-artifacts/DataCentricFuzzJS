function f() {
    const x = 42;
    function g() {
        var s = 0;
        for (let i7 = 100; i7--;) {
            s += x;
        }
        return s;
    }
    return g;
}
var func = f();
for (let i14 = 200; i14--;) {
    func();
}
