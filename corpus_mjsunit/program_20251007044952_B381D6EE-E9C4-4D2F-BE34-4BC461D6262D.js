function foo(a1) {
    var x = a1 ? null : void 0;
    return typeof x == "object";
}
try { noInline(foo); } catch (e) {}
for (let i13 = 0; i13 < 10000; ++i13) {
    var p = !(!(i13 & 1));
    let v24;
    try { v24 = foo(p); } catch (e) {}
    var result = v24;
    if (result !== p) {
        throw (("Error: bad result for p = " + p) + ": ") + result;
    }
}
