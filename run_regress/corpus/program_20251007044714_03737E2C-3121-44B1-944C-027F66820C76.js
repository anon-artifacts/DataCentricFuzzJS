function foo() {
    return void 0 | 0;
}
try { noInline(foo); } catch (e) {}
for (let i8 = 0; i8 < 10000; ++i8) {
    let v14;
    try { v14 = foo(); } catch (e) {}
    var result = v14;
    if (result != 0) {
        throw "Error: bad result: " + result;
    }
}
