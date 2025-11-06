try { console.log("Tests that if the DFG tries to create inlined arguments from within a inlined call frame corresponding to a closure call, then we don't crash."); } catch (e) {}
function foo(a4, a5) {
    let v7;
    try { v7 = a5(a4, 5); } catch (e) {}
    return v7?.[0];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i14 = 0; i14 < 200; i14++) {
    const v23 = i14 < 190 ? i14 : 0.5;
    function f24() {
        var result = 0;
        for (let i28 = 0; i28 < arguments?.length; ++i28) {
            result += arguments?.[i28];
        }
        return [result,arguments];
    }
    let v39;
    try { v39 = foo(v23, f24); } catch (e) {}
    var value = v39;
    if (i14 < 190) {
    } else {
    }
}
