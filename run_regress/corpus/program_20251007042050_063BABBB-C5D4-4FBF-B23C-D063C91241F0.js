var newContext = { id: "new-context" };
function sink(a4, a5) {
    const v6 = (a7) => {
        if ((this != newContext) || (this?.id != newContext?.id)) {
            throw "Wrong context of arrow function #1";
        }
        return a7;
    };
    var g = v6;
    if (a4) {
        if (a5) {
            g.inner = 42;
        }
        return g;
    }
    const v18 = (a19) => {
        if ((this != newContext) || (this?.id != newContext?.id)) {
            throw "Wrong context of arrow function #2";
        }
        return a19;
    };
    return v18;
}
try { noInline(sink); } catch (e) {}
for (let i31 = 0; i31 < 10000; ++i31) {
    let v39;
    try { v39 = sink.call(newContext, true, true); } catch (e) {}
    var f = v39;
    let v42;
    try { v42 = f(42); } catch (e) {}
    var result = v42;
    if (result != 42) {
        throw "Error: expected 42 but got " + result;
    }
}
let v50;
try { v50 = sink.call(newContext, true, false); } catch (e) {}
var f = v50;
let v53;
try { v53 = f(12); } catch (e) {}
var result = v53;
if (result != 12) {
    throw "Error: expected 12 but got " + result;
}
let v61;
try { v61 = sink.call(newContext, true, true); } catch (e) {}
var f = v61;
var result = f?.inner;
if (result != 42) {
    throw "Error: inner should be 42 but is " + result;
}
