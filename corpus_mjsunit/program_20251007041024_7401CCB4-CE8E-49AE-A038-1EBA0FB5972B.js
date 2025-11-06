function f() {
    const v2 = new Set();
    var a = v2.values();
    a.outOfObjectProperty = undefined;
    return !a;
}
f();
f();
f();
