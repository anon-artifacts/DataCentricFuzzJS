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
            try { OSRExit(); } catch (e) {}
        }
        return g;
    }
    const v19 = (a20) => {
        if ((this != newContext) || (this?.id != newContext?.id)) {
            throw "Wrong context of arrow function #2";
        }
        return a20;
    };
    return v19;
}
try { noInline(sink); } catch (e) {}
for (let i32 = 0; i32 < 10000; ++i32) {
    let v40;
    try { v40 = sink.call(newContext, true, false); } catch (e) {}
    var f = v40;
    let v43;
    try { v43 = f(42); } catch (e) {}
    var result = v43;
    if (result != 42) {
        throw "Error: expected 42 but got " + result;
    }
}
let v51;
try { v51 = sink.call(newContext, true, true); } catch (e) {}
var f = v51;
let v54;
try { v54 = f(42); } catch (e) {}
var result = v54;
if (result != 42) {
    throw "Error: expected 42 but got " + result;
}
