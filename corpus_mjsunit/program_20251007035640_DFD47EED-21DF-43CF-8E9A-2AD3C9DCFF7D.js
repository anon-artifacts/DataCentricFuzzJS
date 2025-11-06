var index;
function foo() {
    if (index >= 0) {
        return arguments?.[index];
    } else {
        return 13;
    }
}
function bar() {
    let v9;
    try { v9 = foo(); } catch (e) {}
    return v9;
}
try { noInline(bar); } catch (e) {}
for (let i13 = 0; i13 < 100; ++i13) {
    index = i13 & 1;
    let v23;
    try { v23 = foo(42, 53); } catch (e) {}
    var result = v23;
    if (result != ([42,53])?.[index]) {
        throw "Error: bad result in first loop: " + result;
    }
}
for (let i33 = 0; i33 < 100000; ++i33) {
    index = -(i33 & 1) - 1;
    let v44;
    try { v44 = bar(); } catch (e) {}
    var result = v44;
    if (result !== 13) {
        throw "Error: bad result in second loop: " + result;
    }
}
index = 0;
let v51;
try { v51 = bar(); } catch (e) {}
var result = v51;
if (result !== void 0) {
    throw "Error: bad result at end: " + result;
}
