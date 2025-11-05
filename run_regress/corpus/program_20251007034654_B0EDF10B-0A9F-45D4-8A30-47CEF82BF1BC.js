try { console.log("Verify that we don't use our caller's arguments object in an inlined function."); } catch (e) {}
function bar(a4) {
    var t = arguments;
    var a = a4;
    return a;
}
function foo(a9) {
    var t = arguments;
    var a = a9;
    let v14;
    try { v14 = bar(1); } catch (e) {}
    return v14;
}
try { noInline(foo); } catch (e) {}
function test() {
    for (let i19 = 0; i19 < 10000; ++i19) {
        let v26;
        try { v26 = foo(42); } catch (e) {}
        var result = v26;
        if (result != 1) {
            const v31 = "Expected 1, but got " + result;
            try { console.log(v31); } catch (e) {}
            return false;
        }
    }
    return true;
}
let v35;
try { v35 = test(); } catch (e) {}
if (v35) {
    try { console.log("Correctly accessed inlined callee's own arguments"); } catch (e) {}
}
