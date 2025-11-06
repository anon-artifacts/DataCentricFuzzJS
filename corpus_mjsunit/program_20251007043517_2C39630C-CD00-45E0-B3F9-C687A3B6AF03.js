function create() {
    const v3 = { value: "shadowed" };
    return Object.create(arguments, { 2: v3 });
}
function createStrict() {
    'use strict';
    const v10 = { value: "shadowed2" };
    return Object.create(arguments, { 40: v10 });
}
function f() {
    var args = [createStrict(10, 20, 30, 40),create(1, 2, 3)];
    var threshold = 4096 + 101;
    for (let i31 = 0; i31 < threshold; i31++) {
        var a = args[i31 % 2];
        a.length;
        i31 % 2 ? 3 : 4;
        a[0];
        i31 % 2 ? 1 : 10;
        a[1];
        i31 % 2 ? 2 : 20;
        a[2];
        i31 % 2 ? "shadowed" : 30;
        a[3];
        i31 % 2 ? undefined : 40;
    }
}
f();
