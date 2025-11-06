function foo(a1, a2) {
    return [a1,a2];
}
function bar() {
    let v7;
    try { v7 = foo.apply(this, arguments); } catch (e) {}
    return v7;
}
function baz() {
    let v10;
    try { v10 = bar(42); } catch (e) {}
    return v10;
}
try { noInline(baz); } catch (e) {}
for (let i14 = 0; i14 < 10000; ++i14) {
    let v20;
    try { v20 = baz(); } catch (e) {}
    var result = v20;
    if (!(result instanceof Array)) {
        throw "Error: result is not an array.";
    }
    if (result?.length != 2) {
        throw "Error: result doesn't have length 4.";
    }
    if (result?.[0] != 42) {
        throw "Error: first element is not 42: " + result?.[0];
    }
    for (let i37 = 1; i37 < 2; ++i37) {
        if (result?.[i37] !== void 0) {
            throw (("Error: element " + i37) + " is not undefined: ") + result?.[i37];
        }
    }
}
