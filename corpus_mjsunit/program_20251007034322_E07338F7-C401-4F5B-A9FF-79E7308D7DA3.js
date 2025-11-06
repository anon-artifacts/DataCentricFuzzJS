const v1 = { newCompartment: true };
let v3;
try { v3 = newGlobal(v1); } catch (e) {}
var g = v3;
let v7;
try { v7 = g.Function("fn", "fn()"); } catch (e) {}
var f = v7;
function f9() {
    const v10 = () => {
        const t9 = arguments?.callee;
        t9.caller = null;
    };
    try { v10(); } catch (e) {}
    const v17 = () => {
        return arguments?.callee?.caller;
    };
    try { v17(); } catch (e) {}
}
try { f(f9); } catch (e) {}
