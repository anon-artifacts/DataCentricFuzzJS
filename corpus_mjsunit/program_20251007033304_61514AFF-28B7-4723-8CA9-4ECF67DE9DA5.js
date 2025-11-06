try { console.log("Tests that ArrayPop is known to the DFG to be a side effect."); } catch (e) {}
function foo(a4, a5) {
    var result = a4?.f;
    let v8;
    try { v8 = a5.pop(); } catch (e) {}
    result += v8;
    result += a4?.g;
    return result;
}
try { noInline(foo); } catch (e) {}
silentTestPass = true;
var ouches = 0;
for (let i17 = 0; i17 < 200; i17++) {
    var a = { f: 1, g: 2 };
    var b = [];
    var expected;
    if (i17 < 150) {
        function f34() {
            try { console.log("Should never get here"); } catch (e) {}
        }
        try { b.__defineGetter__("0", f34); } catch (e) {}
        b.length = 0;
        b[0] = 42;
        expected = "45";
    } else {
        function f42() {
            try { console.log("Ouch!"); } catch (e) {}
            ouches++;
            delete a?.g;
            a.h = 43;
            return 5;
        }
        try { b.__defineGetter__("0", f42); } catch (e) {}
        expected = "0/0";
    }
    try { foo(a, b); } catch (e) {}
}
