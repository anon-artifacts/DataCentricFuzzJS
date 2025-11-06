function foo(a1, a2, a3) {
    return ((a1 | 0) + (a2 | 0)) + (a3 | 0);
}
function bar(a13) {
    var a = a13?.f;
    var b = a13?.g;
    var c = a13?.h;
    var d = a13?.i;
    var e = a13?.j;
    var f = a13?.k;
    var g = a13?.l;
    const v30 = void 0;
    const v32 = void 0;
    let v33;
    try { v33 = foo(42, v30, v32); } catch (e) {}
    return ((((((v33 + a) + b) + c) + d) + e) + f) + g;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i45 = 0; i45 < 100000; ++i45) {
    const v52 = i45 * 3;
    const v54 = i45 - 1;
    const v58 = (i45 / 2) | 0;
    const v59 = -i45;
    const v65 = 13 + ((i45 / 5) | 0);
    const v71 = 14 - ((i45 / 6) | 0);
    const v73 = 1 - i45;
    const v74 = {
        f: v52,
        g: v54,
        h: v58,
        i: v59,
        j: v65,
        k: v71,
        l: v73,
    };
    let v75;
    try { v75 = bar(v74); } catch (e) {}
    var result = v75;
    var expected = ((((((((((42 + (i45 * 3)) + i45) - 1) + ((i45 / 2) | 0)) - i45) + 13) + ((i45 / 5) | 0)) + 14) - ((i45 / 6) | 0)) + 1) - i45;
    if (result != expected) {
        throw (((("Error: for iteration " + i45) + " expected ") + expected) + " but got ") + result;
    }
}
