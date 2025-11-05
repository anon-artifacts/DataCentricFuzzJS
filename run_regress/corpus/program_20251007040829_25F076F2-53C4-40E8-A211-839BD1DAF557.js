function f() {
    var proto = { 60: "ok" };
    Object.preventExtensions(proto);
    var o = Object.create(proto);
    for (let i9 = 0; i9 < 65; i9++) {
        o[i9] = i9;
        if (i9 === 50) {
            Object.freeze(proto);
        }
    }
    o[60];
    o[61];
}
f();
