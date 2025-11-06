function foo(a1, a2, a3) {
    return 42;
}
function bar(a6, a7, a8) {
    return (a6 + a7) + a8;
}
function baz(a12, a13) {
    const v14 = a13?.[0];
    const v15 = a13?.[1];
    const v16 = a13?.[2];
    let v17;
    try { v17 = a12(v14, v15, v16); } catch (e) {}
    return v17;
}
try { noInline(baz); } catch (e) {}
let v22;
try { v22 = new Float32Array(3); } catch (e) {}
var o = v22;
o[0] = 1;
o[1] = 2;
o[2] = 3;
for (let i28 = 0; i28 < 10000; ++i28) {
    let v34;
    try { v34 = baz(foo, o); } catch (e) {}
    var result = v34;
    if (result != 42) {
        throw "Error: bad result in loop: " + result;
    }
}
let v40;
try { v40 = baz(bar, o); } catch (e) {}
var result = v40;
if (result != 6) {
    throw "Error: bad result in loop: " + result;
}
