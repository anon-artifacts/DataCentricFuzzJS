function load(a1, a2) {
    return a1[a2];
}
function f() {
    const v6 = {};
    const v8 = new Proxy(v6, {});
    return load(v8, undefined);
}
f();
f();
load([11,22,33], 0);
f();
