function foo(a1, a2) {
    return a1 << a2;
}
try { noInline(foo); } catch (e) {}
function f9() {
    return 4;
}
var things = [1,2.5,"3",{ valueOf: f9 }];
var results = [2,4,6,8];
for (let i21 = 0; i21 < 100000; ++i21) {
    const v29 = things?.[i21 % things?.length];
    let v31;
    try { v31 = foo(v29, 1); } catch (e) {}
    var result = v31;
    var expected = results?.[i21 % results?.length];
    if (result != expected) {
        throw (("Error: bad result for i = " + i21) + ": ") + result;
    }
}
