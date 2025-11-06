try { console.log("This tests that a constant folding on a node that has obviously mispredicted type doesn't send the compiler into an infinite loop."); } catch (e) {}
function foo(a4) {
    var a = 1;
    var b = 4000;
    var c = (a / b) + a4;
    var d = 0;
    for (let i15 = 0; i15 < 1000; ++i15) {
        d++;
    }
    return c + d;
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i28 = 0; i28 < 1000; i28++) {
    try { foo(0.5); } catch (e) {}
}
