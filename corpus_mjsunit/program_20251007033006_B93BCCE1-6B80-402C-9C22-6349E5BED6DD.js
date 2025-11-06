function foo(a1) {
    return a1 | 0;
}
let v4;
try { v4 = foo(); } catch (e) {}
try { noInline(v4); } catch (e) {}
for (let i8 = 0; i8 < 10000; ++i8) {
    const v15 = void 0;
    let v16;
    try { v16 = foo(v15); } catch (e) {}
    var result = v16;
    if (result != 0) {
        throw "Error: bad result: " + result;
    }
}
