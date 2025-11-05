function sink(a1, a2) {
    function f3(a4) {
        return a4;
    }
    var g = f3;
    if (a1) {
        if (a2) {
            g.inner = 42;
        }
        return g;
    }
    function f7(a8) {
        return a8;
    }
    return f7;
}
try { noInline(sink); } catch (e) {}
for (let i12 = 0; i12 < 10000; ++i12) {
    let v20;
    try { v20 = sink(true, true); } catch (e) {}
    var f = v20;
    let v23;
    try { v23 = f(42); } catch (e) {}
    var result = v23;
    if (result != 42) {
        throw "Error: expected 42 but got " + result;
    }
}
let v31;
try { v31 = sink(true, false); } catch (e) {}
var f = v31;
let v34;
try { v34 = f(12); } catch (e) {}
var result = v34;
if (result != 12) {
    throw "Error: expected 12 but got " + result;
}
let v42;
try { v42 = sink(true, true); } catch (e) {}
var f = v42;
var result = f?.inner;
if (result != 42) {
    throw "Error: inner should be 42 but is " + result;
}
