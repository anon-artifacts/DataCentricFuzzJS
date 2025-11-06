function foo(a1, a2) {
    try {
        return a1 - a2;
    } catch(e4) {
        return e4;
    }
}
try { noInline(foo); } catch (e) {}
for (let i8 = 0; i8 < 100000; ++i8) {
    const v18 = i8 & 1 ? 32 : "32";
    let v20;
    try { v20 = foo(v18, 10); } catch (e) {}
    var result = v20;
    if (result !== 22) {
        throw "Error: bad result: " + result;
    }
}
function f26() {
    throw "error42";
}
const v28 = { valueOf: f26 };
let v30;
try { v30 = foo(v28, 10); } catch (e) {}
var result = v30;
if (result !== "error42") {
    throw "Error: bad result at end: " + result;
}
