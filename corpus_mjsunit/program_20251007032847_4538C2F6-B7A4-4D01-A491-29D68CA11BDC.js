function foo(a1, a2) {
    let v3;
    try { v3 = a1[a2](); } catch (e) {}
    return v3;
}
try { noInline(foo); } catch (e) {}
for (let i7 = 0; i7 < 10000; ++i7) {
    function f13() {
        return 42;
    }
    const v15 = [f13];
    let v17;
    try { v17 = foo(v15, 0); } catch (e) {}
    var result = v17;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
function f23() {
    return 43;
}
const v25 = [f23];
let v27;
try { v27 = foo(v25, 0); } catch (e) {}
var result = v27;
if (result != 43) {
    throw "Error: bad result at end: " + result;
}
