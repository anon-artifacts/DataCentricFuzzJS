function foo(a1) {
    switch (typeof a1) {
        case "undefined":
            return 0;
        case "object":
            return 1;
        case "function":
            return 2;
        case "boolean":
            return 3;
        case "number":
            return 4;
        case "string":
            return 5;
        default:
            return 6;
    }
}
try { noInline(foo); } catch (e) {}
function test(a19, a20) {
    let v21;
    try { v21 = foo(a19); } catch (e) {}
    var result = v21;
    if (result != a20) {
        throw ((((("Error: bad type code for " + a19) + ": ") + result) + " (expected ") + a20) + ")";
    }
}
for (let i35 = 0; i35 < 10000; ++i35) {
    const v42 = void 0;
    try { test(v42, 0); } catch (e) {}
    const v45 = {};
    try { test(v45, 1); } catch (e) {}
    function f48() {
        return 42;
    }
    try { test(f48, 2); } catch (e) {}
    try { test(true, 3); } catch (e) {}
    try { test(42, 4); } catch (e) {}
    try { test(42.5, 4); } catch (e) {}
    try { test("hello", 5); } catch (e) {}
}
