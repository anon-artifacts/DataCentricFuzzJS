function foo(a1) {
    a1.f = 1;
}
function fu(a4) {
    a4.e = 2;
}
function bar(a7, a8) {
    a7(a8);
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
const v62 = { f: 42, e: 23 };
const v66 = { f: 42, e: 23, g: 100 };
function f67(a68, a69, a70) {
    var result = 0;
    var n = 1000000;
    for (let i76 = 0; i76 < n; ++i76) {
        fu(a69);
        bar(a68, a69);
        var tmp = a69;
        a69 = a70;
        a70 = tmp;
    }
    if (a69.e != 2) {
        throw "Error: bad value in o.e: " + a69.e;
    }
    if (a69.f != 1) {
        throw "Error: bad value in o.f: " + a69.f;
    }
    if (a70.e != 2) {
        throw "Error: bad value in p.e: " + a70.e;
    }
    if (a70.f != 1) {
        throw "Error: bad value in p.f: " + a70.f;
    }
}
f67(foo, v62, v66);
