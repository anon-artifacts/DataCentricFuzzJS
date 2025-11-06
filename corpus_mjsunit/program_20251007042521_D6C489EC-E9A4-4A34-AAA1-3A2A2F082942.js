function f0() {
}
let v2;
try { v2 = isNeverOptimizeLiteMode(); } catch (e) {}
if (v2) {
    try { f0("Warning: skipping test that requires optimization in Lite mode."); } catch (e) {}
    try { quit(0); } catch (e) {}
}
try { isAlwaysOptimize(); } catch (e) {}
try { isNeverOptimize(); } catch (e) {}
function f12() {
    var sum = 0;
    var i = 0;
    for (let i18 = 0; i18 < 3; ++i18) {
        function f24(a25) {
            return 2 * a25;
        }
        var f = f24;
        let v29;
        try { v29 = f(i18); } catch (e) {}
        sum += v29;
        if (i18 == 1) {
            try { isInterpreted(f); } catch (e) {}
        } else {
            if (i18 == 2) {
                try { isTurboFanned(f); } catch (e) {}
            }
        }
    }
}
try { f12(); } catch (e) {}
