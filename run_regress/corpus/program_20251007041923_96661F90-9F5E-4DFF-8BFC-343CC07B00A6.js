var globalResult;
function f2() {
    globalResult = 1;
}
const t4 = Object?.prototype;
t4.valueOf = f2;
function foo(a7) {
    globalResult = 0;
    var o = arguments;
    if (a7) {
        +o;
    }
    return globalResult;
}
try { noInline(foo); } catch (e) {}
for (let i15 = 0; i15 < 10000; ++i15) {
    let v22;
    try { v22 = foo(false); } catch (e) {}
    var result = v22;
    if (result !== 0) {
        throw "Error: bad result: " + result;
    }
}
let v29;
try { v29 = foo(true); } catch (e) {}
var result = v29;
if (result !== 1) {
    throw "Error: bad result at end: " + result;
}
