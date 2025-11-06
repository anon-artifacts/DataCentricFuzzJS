var doEffect = false;
var didEffect = false;
function bar(a5, a6) {
    if (doEffect) {
        delete a6?.g;
        const v9 = () => {
            didEffect = true;
            return 42;
        };
        try { a6.__defineGetter__("g", v9); } catch (e) {}
    }
}
try { noInline(bar); } catch (e) {}
function foo(a16, a17) {
    var result = a16?.f + a17?.g;
    try { bar(a16, a17); } catch (e) {}
    return (result + a16?.f) + a17?.g;
}
try { noInline(foo); } catch (e) {}
var o = { g: 1 };
o.h = 2;
for (let i33 = 0; i33 < 10000; ++i33) {
    const v40 = { f: 1 };
    const v42 = { g: 3 };
    let v43;
    try { v43 = foo(v40, v42); } catch (e) {}
    var result = v43;
    if (result != 8) {
        throw "Error: bad result in loop: " + result;
    }
}
doEffect = true;
const v51 = { f: 1 };
const v53 = { g: 3 };
let v54;
try { v54 = foo(v51, v53); } catch (e) {}
var result = v54;
if (result != 47) {
    throw "Error: bad result at end: " + result;
}
if (!didEffect) {
    throw "Error: did not do effect";
}
