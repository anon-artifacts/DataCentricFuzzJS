function foo(a1) {
    a1.f = 1;
}
function fu(a4) {
    a4.e = 2;
}
function bar(a7, a8) {
    a7(a8);
}
function baz(a11, a12) {
    a11(a12);
}
for (let i15 = 0; i15 < 100; ++i15) {
    foo({ f: 1, e: 2 });
    foo({ e: 1, f: 2 });
    foo({ e: 1 });
    foo({ d: 1, e: 2, f: 3 });
    fu({ f: 1, e: 2 });
    fu({ e: 1, f: 2 });
    fu({ e: 1, f: 2, g: 3 });
    fu({ d: 1, e: 2, f: 3, g: 4 });
}
for (let i57 = 0; i57 < 100; ++i57) {
    bar(foo, { f: 1 });
    function f66() {
    }
    bar(f66, null);
    function f69() {
        return 42;
    }
    bar(f69, null);
    baz(fu, { e: 1 });
    function f76() {
    }
    baz(f76, null);
    function f79() {
        return 42;
    }
    baz(f79, null);
}
const v85 = { e: 42, f: 2 };
const v89 = { e: 12, f: 13, g: 14 };
function f90(a91, a92, a93, a94) {
    var result = 0;
    var n = 1000000;
    for (let i100 = 0; i100 < n; ++i100) {
        var q;
        if (i100 == (n - 1)) {
            q = a94;
        } else {
            q = a93;
        }
        baz(a92, q);
        bar(a91, q);
    }
    if (a93.e != 2) {
        throw "Error: bad value in o.e: " + a93.e;
    }
    if (a93.f != 1) {
        throw "Error: bad value in o.f: " + a93.f;
    }
    if (a94.e != 2) {
        throw "Error: bad value in p.e: " + a94.e;
    }
    if (a94.f != 1) {
        throw "Error: bad value in p.f: " + a94.f;
    }
}
f90(foo, fu, v85, v89);
