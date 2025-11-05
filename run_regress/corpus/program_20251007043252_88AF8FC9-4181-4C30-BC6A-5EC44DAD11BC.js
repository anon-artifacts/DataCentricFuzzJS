try { console.log("Tests correctness of function calls when the function is overwritten."); } catch (e) {}
function foo(a4, a5) {
    return a4 + a5;
}
function bar(a8, a9) {
    let v10;
    try { v10 = foo(a8, a9); } catch (e) {}
    return v10;
}
silentTestPass = true;
try { noInline(bar); } catch (e) {}
for (let i16 = 0; i16 < 200; i16++) {
    if (i16 == 150) {
        function f24(a25, a26) {
            return a25 - a26;
        }
        foo = f24;
    }
    var expected;
    if (i16 < 150) {
        expected = (i16 + i16) + 1;
    } else {
        expected = -1;
    }
    const v38 = i16 + 1;
    try { bar(i16, v38); } catch (e) {}
}
