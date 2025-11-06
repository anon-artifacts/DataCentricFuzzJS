function foo(a1) {
    var sum = 0;
    var inc = a1 ? 100 : 200;
    for (let i9 = 0; i9 < 100000; i9++) {
        sum += inc;
    }
    return sum + inc;
}
function bar(a17) {
    var sum = 0;
    var inc = a17 ? 100 : 200;
    var x = a17 ? 5 : 6;
    var y = a17 ? 7 : 8;
    for (let i33 = 0; i33 < 100000; i33++) {
        sum += inc;
    }
    return sum ? x : y;
}
function baz(a41) {
    var limit = a41 ? 100001 : 100002;
    var r = 1;
    var x = a41 ? 1 : 2;
    var y = a41 ? 3 : 4;
    for (let i57 = 0; i57 < limit; i57++) {
        r = r * -1;
    }
    return r > 0 ? x == y : x != y;
}
function qux(a71) {
    var limit = a71 ? 100001 : 100002;
    var r = 1;
    var x = a71 ? 1 : 2;
    var y = a71 ? 3 : 4;
    for (let i87 = 0; i87 < limit; i87++) {
        r = r * -1;
    }
    var w = r > 0 ? x : y;
    var z = r > 0 ? y : x;
    return w === z;
}
function test(a105, a106, a107) {
    a105(true);
    a105(false);
    a105(true);
    a105(false);
}
test(foo, 10000100, 20000200);
test(bar, 5, 6);
test(baz, true, false);
test(qux, false, false);
