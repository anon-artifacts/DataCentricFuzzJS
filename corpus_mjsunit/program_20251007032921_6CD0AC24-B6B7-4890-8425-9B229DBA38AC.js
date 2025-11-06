function thingy(a1) {
    try { a1(); } catch (e) {}
}
try { noInline(thingy); } catch (e) {}
function foo(a6) {
    var x;
    if (a6) {
        x = a6;
    }
    function f9() {
        return x;
    }
    try { thingy(f9); } catch (e) {}
    var result = 0;
    for (let i14 = 0; i14 < 100000; ++i14) {
        result += x;
    }
    return result;
}
try { noInline(foo); } catch (e) {}
for (let i22 = 0; i22 < 10; ++i22) {
    let v29;
    try { v29 = foo(42); } catch (e) {}
    var result = v29;
    if (result != 4200000) {
        throw "Error: bad first result: " + result;
    }
}
let v36;
try { v36 = foo(0); } catch (e) {}
var result = v36;
if (("" + result) != "NaN") {
    throw "Error: bad result at end: " + result;
}
