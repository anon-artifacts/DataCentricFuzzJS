function foo(a1) {
    return a1.f;
}
function fu(a4) {
    return a4.e;
}
function bar(a7, a8) {
    return a7(a8);
}
for (let i11 = 0; i11 < 100; ++i11) {
    foo({ f: 1, e: 2 });
    foo({ e: 1, f: 2 });
    foo({ d: 1, e: 2, f: 3 });
    fu({ f: 1, e: 2 });
    fu({ e: 1, f: 2 });
    fu({ d: 1, e: 2, f: 3 });
}
for (let i44 = 0; i44 < 100; ++i44) {
    bar(foo, { f: 1 });
    function f53() {
    }
    bar(f53, null);
    function f56() {
        return 42;
    }
    bar(f56, null);
}
const v62 = { f: 42, e: 2 };
function f63(a64, a65) {
    var result = 0;
    var n = 1000000;
    for (let i71 = 0; i71 < n; ++i71) {
        var p;
        if (i71 == (n - 1)) {
            p = { f: 42, e: 42 };
        } else {
            p = a65;
        }
        result += fu(p);
        result += bar(a64, p);
    }
    if (result != (((n - 1) * (a65.f + a65.e)) + (42 * 2))) {
        throw "Error: bad result: " + result;
    }
}
f63(foo, v62);
