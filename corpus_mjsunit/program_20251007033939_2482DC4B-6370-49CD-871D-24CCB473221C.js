function foo(a1, a2) {
    return a1 + a2;
}
function baz(a5, a6) {
    function bar() {
        var a = arguments;
        var tmp = arguments?.[0] + 1;
        let v16;
        try { v16 = foo.apply(null, a); } catch (e) {}
        return tmp + v16;
    }
    let v18;
    try { v18 = bar(a5, a6); } catch (e) {}
    return v18;
}
try { noInline(baz); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    let v30;
    try { v30 = baz(1, 2); } catch (e) {}
    var result = v30;
    if (result != ((1 + 1) + 3)) {
        throw "Error: bad result: " + result;
    }
}
let v42;
try { v42 = baz(1.5, 2); } catch (e) {}
var result = v42;
if (result != ((1.5 + 1) + 3.5)) {
    throw "Error: bad result at end: " + result;
}
