function f() {
    var x = 0;
    for (let i4 = 1; i4 < 1000000; i4++) {
        if (i4 > 0) {
            x += Math.clz32(i4);
        }
    }
    return x;
}
function g() {
    var x = 0;
    for (let i18 = 1; i18 < 1000000; i18++) {
        x += Math.clz32(i18);
    }
    return x;
}
function h() {
    var x = 0;
    for (let i30 = 0; i30 < 1000000; i30++) {
        x += Math.clz32(i30);
    }
    return x;
}
f();
g();
h();
