function foo(a1) {
    return a1.f;
}
function fu(a4) {
    return a4.e;
}
function bar(a7, a8) {
    return a7(a8);
}
for (let i11 = 0; i11 < 1000; ++i11) {
    var o = { f: 1 };
    o["i" + i11] = 42;
    foo(o);
    fu({ f: 1, e: 2 });
    fu({ e: 1, f: 2 });
}
for (let i33 = 0; i33 < 100; ++i33) {
    bar(foo, { f: 1 });
    function f42() {
    }
    bar(f42, null);
    function f45() {
        return 42;
    }
    bar(f45, null);
}
const t26 = Number.prototype;
t26.f = 100;
const v54 = { f: 42, e: 43 };
const v57 = { e: 44, f: 45 };
function f58(a59, a60, a61) {
    var result = 0;
    var n = 1000000;
    for (let i67 = 0; i67 < n; ++i67) {
        result += fu(a60);
        result += bar(a59, a60);
        var tmp = a60;
        a60 = a61;
        a61 = tmp;
    }
    if (result != (((((a60.f + a60.e) + a61.f) + a61.e) * n) / 2)) {
        throw "Error: bad result: " + result;
    }
}
f58(foo, v54, v57);
