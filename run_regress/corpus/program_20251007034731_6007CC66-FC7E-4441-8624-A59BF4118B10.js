function foo(a1, a2, a3, a4) {
    a1 = a2 + a3;
    if (a4) {
        a1++;
        return a1;
    }
}
function bar(a8, a9) {
    const v11 = a8 <= a9;
    let v12;
    try { v12 = foo("hello", a8, a9, v11); } catch (e) {}
    return v12;
}
try { noInline(bar); } catch (e) {}
for (let i16 = 0; i16 < 100000; ++i16) {
    let v24;
    try { v24 = bar(2000000000, 2000000000); } catch (e) {}
    var result = v24;
    if (result != 4000000001) {
        throw "Error: bad result: " + result;
    }
}
