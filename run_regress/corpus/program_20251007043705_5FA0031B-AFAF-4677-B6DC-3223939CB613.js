function foo(a1) {
    return a1?.f?.g;
}
function bar(a5, a6) {
    a5.f = a6;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
const v11 = { g: 42 };
var o = { f: v11 };
for (let i15 = 0; i15 < 10000; ++i15) {
    const v22 = { g: 42 };
    try { bar(o, v22); } catch (e) {}
}
for (let i25 = 0; i25 < 10000; ++i25) {
    let v31;
    try { v31 = foo(o); } catch (e) {}
    var result = v31;
    if (result !== 42) {
        throw "Error: bad result: " + result;
    }
}
const v38 = { g: 43 };
let v40;
try { v40 = Object.create(v38); } catch (e) {}
try { bar(o, v40); } catch (e) {}
let v42;
try { v42 = foo(o); } catch (e) {}
var result = v42;
if (result !== 43) {
    throw "Error: bad result at end: " + result;
}
