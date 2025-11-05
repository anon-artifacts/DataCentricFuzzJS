var toggle = 0;
function bar() {
    toggle ^= 1;
    if (1) {
        return 42;
    } else {
        function f5() {
            return 42;
        }
        return { valueOf: f5 };
    }
}
try { noInline(bar); } catch (e) {}
function baz() {
    return 7;
}
try { noInline(baz); } catch (e) {}
function foo() {
    let v14;
    try { v14 = bar(); } catch (e) {}
    let v15;
    try { v15 = baz(); } catch (e) {}
    return v14 ^ v15;
}
try { noInline(foo); } catch (e) {}
for (let i19 = 0; i19 < 100000; ++i19) {
    let v25;
    try { v25 = foo(); } catch (e) {}
    var result = v25;
    if (result != 45) {
        throw "Error: bad result: " + result;
    }
}
