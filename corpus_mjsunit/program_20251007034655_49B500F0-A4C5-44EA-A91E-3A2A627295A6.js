function f0() {
}
let v2;
try { v2 = isNeverOptimizeLiteMode(); } catch (e) {}
if (v2) {
    try { f0("Warning: skipping test that requires optimization in Lite mode."); } catch (e) {}
    try { quit(0); } catch (e) {}
}
try { isAlwaysOptimize(); } catch (e) {}
function f() {
    do {
        do {
            let v12;
            try { v12 = f0(f); } catch (e) {}
            var opt_status = v12;
            ((opt_status & V8OptimizationStatus?.kMaybeDeopted) !== 0) || ((opt_status & V8OptimizationStatus?.kTopmostFrameIsTurboFanned) !== 0);
        } while (false)
    } while (false)
}
try { f(); } catch (e) {}
function g() {
    for (let i29 = 0; i29 < 1; i29++) {
    }
    do {
        do {
            for (let i36 = 0; i36 < 1; i36++) {
            }
        } while (false)
    } while (false)
    do {
        do {
            do {
                do {
                    do {
                        do {
                            do {
                                do {
                                    let v45;
                                    try { v45 = f0(g); } catch (e) {}
                                    var opt_status = v45;
                                    ((opt_status & V8OptimizationStatus?.kMaybeDeopted) !== 0) || ((opt_status & V8OptimizationStatus?.kTopmostFrameIsTurboFanned) !== 0);
                                } while (false)
                            } while (false)
                        } while (false)
                    } while (false)
                } while (false)
            } while (false)
        } while (false)
    } while (false)
}
try { g(); } catch (e) {}
