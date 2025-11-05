function foo(a1, a2) {
    return a1 + a2;
}
var global;
function bar() {
    var a = arguments;
    var tmp = global + 1;
    let v13;
    try { v13 = foo.apply(null, a); } catch (e) {}
    return tmp + v13;
}
function baz(a16, a17) {
    let v18;
    try { v18 = bar(a16, a17); } catch (e) {}
    return v18;
}
try { noInline(baz); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    global = i22;
    let v30;
    try { v30 = baz(1, 2); } catch (e) {}
    var result = v30;
    if (result != (((i22 + 1) + 1) + 2)) {
        throw "Error: bad result: " + result;
    }
}
global = 1.5;
let v44;
try { v44 = baz(1, 2); } catch (e) {}
var result = v44;
if (result != (((1.5 + 1) + 1) + 2)) {
    throw "Error: bad result at end: " + result;
}
