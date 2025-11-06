function g() {
    let v3;
    try { v3 = newGlobal(""); } catch (e) {}
    z = v3;
    function f5(a6) {
        try { evalcx(a6, z); } catch (e) {}
    }
    return f5;
}
let v10;
try { v10 = g(); } catch (e) {}
f = v10;
try { f("    for (var x = 0; x < 1; ++x) {        a = x;    }"); } catch (e) {}
try { f("a in eval"); } catch (e) {}
