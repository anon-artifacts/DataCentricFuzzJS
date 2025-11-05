try { console.log("Verify that we don't trash m_currentInstruction with an inlined function."); } catch (e) {}
function myPush(a4, a5) {
    try { a4.push(a5); } catch (e) {}
}
function myPop(a8) {
    try { a8.pop(); } catch (e) {}
}
function foo(a11) {
    try { myPush(a11, 42); } catch (e) {}
    try { myPop(a11); } catch (e) {}
    return a11?.length;
}
try { noInline(foo); } catch (e) {}
function test() {
    var myArray = ["one","two","three"];
    for (let i25 = 0; i25 < 10000; ++i25) {
        let v31;
        try { v31 = foo(myArray); } catch (e) {}
        if (v31 != 3) {
            try { console.log("Array changed unexpectedly"); } catch (e) {}
            return false;
        }
    }
    return true;
}
let v38;
try { v38 = test(); } catch (e) {}
if (v38) {
    try { console.log("Correctly inlined callee and used m_currentInstruction in caller"); } catch (e) {}
}
