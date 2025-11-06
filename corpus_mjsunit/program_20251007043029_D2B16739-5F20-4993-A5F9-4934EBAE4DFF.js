try { console.log("Tests that the DFG knows that a function that appears like Math.abs could potentially use value in arbitrary ways, and not just in a context that converts values to numbers."); } catch (e) {}
function foo(a4, a5, a6) {
    const v7 = a5?.[a6];
    let v8;
    try { v8 = a4(v7); } catch (e) {}
    return v8;
}
function bar(a10) {
    return a10;
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i16 = 0; i16 < 200; i16++) {
    var f;
    var array;
    var expected;
    if (i16 == 190) {
        f = bar;
        array = [,1.5];
        expected = void 0;
    } else {
        f = Math?.abs;
        array = [1.5];
        let v40;
        try { v40 = Math.abs(1.5); } catch (e) {}
        expected = v40;
    }
    let v42;
    try { v42 = foo(f, array, 0); } catch (e) {}
    v42 === expected;
}
