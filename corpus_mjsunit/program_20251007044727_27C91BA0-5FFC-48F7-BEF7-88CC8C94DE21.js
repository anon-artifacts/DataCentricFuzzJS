function foo(a1, a2) {
    var x = a1?.[a2];
    x + 100;
    return x + 2000000000;
}
try { noInline(foo); } catch (e) {}
var array = [2000000000.5];
for (let i15 = 0; i15 < 1000000; ++i15) {
    let v22;
    try { v22 = foo(array, 0); } catch (e) {}
    var result = v22;
}
