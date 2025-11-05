function foo(a1) {
    return a1?.f?.g;
}
function bar(a5, a6) {
    a5.f = a6;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var o = {};
for (let i13 = 0; i13 < 5; ++i13) {
    const v20 = { g: 42 };
    try { bar(o, v20); } catch (e) {}
}
for (let i23 = 0; i23 < 10000; ++i23) {
    let v29;
    try { v29 = foo(o); } catch (e) {}
    var result = v29;
    if (result !== 42) {
        throw "Error: bad result: " + result;
    }
}
const v36 = { g: 43 };
let v38;
try { v38 = Object.create(v36); } catch (e) {}
try { bar(o, v38); } catch (e) {}
let v40;
try { v40 = foo(o); } catch (e) {}
var result = v40;
if (result !== 43) {
    throw "Error: bad result at end: " + result;
}
