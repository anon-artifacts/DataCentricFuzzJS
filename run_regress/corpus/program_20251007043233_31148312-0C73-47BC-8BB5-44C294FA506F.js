var globalString;
function foo(a3, a4) {
    var x = a3?.f;
    let v8;
    try { v8 = String.fromCharCode(a4); } catch (e) {}
    globalString = v8;
    return x + a3?.f;
}
var o = { f: 24 };
o.g = 43;
try { noInline(foo); } catch (e) {}
for (let i18 = 0; i18 < 10000; ++i18) {
    const v25 = { f: 42 };
    function f26() {
        return 32;
    }
    const v28 = { valueOf: f26 };
    let v29;
    try { v29 = foo(v25, v28); } catch (e) {}
    var result = v29;
    if (result != 84) {
        throw "Error: bad result: " + result;
    }
}
var globalO = { f: 42 };
function f38() {
    delete globalO?.f;
    function f41() {
        return 75;
    }
    try { globalO.__defineGetter__("f", f41); } catch (e) {}
    return 33;
}
var weirdValue = { valueOf: f38 };
let v47;
try { v47 = foo(globalO, weirdValue); } catch (e) {}
var result = v47;
if (result != (42 + 75)) {
    throw "Error: bad result at end: " + result;
}
