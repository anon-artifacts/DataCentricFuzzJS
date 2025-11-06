function foo(a1, a2) {
    var i = a2?.f;
    if (i != 92160) {
        a1.g = 42;
    }
    return a1?.f?.f + i;
}
try { noInline(foo); } catch (e) {}
for (let i14 = 0; i14 < 100000; ++i14) {
    const v21 = { f: 42 };
    const v22 = { f: v21 };
    const v24 = { f: 92160 };
    let v25;
    try { v25 = foo(v22, v24); } catch (e) {}
    var result = v25;
    if (result != 92202) {
        throw "Error: bad result: " + result;
    }
}
const v33 = { g: 20, f: 21 };
const v34 = { f: v33 };
const v36 = { f: 92160 };
let v37;
try { v37 = foo(v34, v36); } catch (e) {}
var result = v37;
if (result != 92181) {
    throw "Error: bad result: " + result;
}
