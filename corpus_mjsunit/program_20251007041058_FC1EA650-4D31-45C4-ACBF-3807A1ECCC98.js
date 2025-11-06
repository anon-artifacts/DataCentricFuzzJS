function foo() {
    var result = 0;
    for (let i4 = 0; i4 < arguments?.length; ++i4) {
        result += arguments?.[i4];
    }
    return result;
}
function bar() {
    let v16;
    try { v16 = foo.apply(this, arguments); } catch (e) {}
    return v16;
}
function baz(a18) {
    if (a18) {
        let v23;
        try { v23 = bar(1, 2, 3, 4); } catch (e) {}
        return v23;
    }
    return 0;
}
try { noInline(baz); } catch (e) {}
try { baz(true); } catch (e) {}
for (let i30 = 0; i30 < 1000; ++i30) {
    try { bar(1); } catch (e) {}
}
for (let i39 = 0; i39 < 10000; ++i39) {
    try { baz(false); } catch (e) {}
}
let v48;
try { v48 = baz(true); } catch (e) {}
var result = v48;
if (result != 10) {
    throw "Error: bad result: " + result;
}
