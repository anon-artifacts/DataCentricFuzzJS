function foo(a1, a2) {
    return a1 - a2;
}
try { noInline(foo); } catch (e) {}
function f6() {
    return 4;
}
var things = [{ valueOf: f6 }];
var results = [3];
for (let i15 = 0; i15 < 100000; ++i15) {
    const v23 = things?.[i15 % things?.length];
    let v25;
    try { v25 = foo(v23, 1); } catch (e) {}
    var result = v25;
    var expected = results?.[i15 % results?.length];
    if (result != expected) {
        throw (("Error: bad result for i = " + i15) + ": ") + result;
    }
}
