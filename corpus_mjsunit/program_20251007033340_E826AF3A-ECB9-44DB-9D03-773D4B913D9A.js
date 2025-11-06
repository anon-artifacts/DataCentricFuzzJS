function test0() {
    function test0a(a2) {
        var o2 = a2;
        var a = a2.q;
        o2.p = 0;
        a2.p = 1;
    }
    var o = {};
    test0a(o);
    return objectToString(o);
}
print("test0: " + test0());
function test1() {
    function test1a(a20, a21) {
        if (a20.p) {
            a21.r = 0;
            a21.s = 0;
            a21.t = 0;
        }
        a20.q = 1;
    }
    var o = { p: 0, q: 0 };
    var o2 = { p: 1, q: 0 };
    test1a(o, o);
    test1a(o2, o2);
    return objectToString(o2);
}
print("test1: " + test1());
function test2() {
    function test2a(a45, a46) {
        if (a45.p) {
            delete a46.q;
        }
        a45.q = 1;
    }
    var o = { p: 0, q: 0 };
    var o2 = { p: 1, q: 0 };
    test2a(o, o);
    test2a(o2, o2);
    return objectToString(o2);
}
print("test2: " + test2());
function test3() {
    function test3a(a68, a69) {
        if (a68.p) {
            var p = "q";
            delete a69[p];
        }
        a68.q = 1;
    }
    var o = { p: 0, q: 0 };
    var o2 = { p: 1, q: 0 };
    test3a(o, o);
    test3a(o2, o2);
    return objectToString(o2);
}
print("test3: " + test3());
function objectToString(a92) {
    var s = "";
    for (const v95 in a92) {
        s += ((v95 + ": ") + a92[v95]) + ", ";
    }
    if (s.length !== 0) {
        s = s.substring(0, s.length - (", ").length);
    }
    return ("{" + s) + "}";
}
