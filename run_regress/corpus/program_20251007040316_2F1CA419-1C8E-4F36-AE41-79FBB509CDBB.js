function g1(a1) {
    return a1 + 1;
}
function f1() {
    var y = 0;
    for (let i8 = 0; i8 < 100; i8++) {
        let v14;
        try { v14 = g1(i8); } catch (e) {}
        let v15;
        try { v15 = g1(v14); } catch (e) {}
        y += v15;
    }
    return y;
}
try { g1(10); } catch (e) {}
try { f1(); } catch (e) {}
x = 1;
let v24;
try { v24 = newGlobal("same-compartment"); } catch (e) {}
other = v24;
try { other.eval("f = function() { return x; }; x = 2;"); } catch (e) {}
h = other?.f;
function testOtherGlobal() {
    var y = 0;
    for (let i35 = 0; i35 < 100; i35++) {
        let v42;
        try { v42 = h(); } catch (e) {}
        y += v42;
    }
    return y;
}
try { h(); } catch (e) {}
try { testOtherGlobal(); } catch (e) {}
function f47() {
    return x;
}
f2 = f47;
function test2() {
    var y = 0;
    for (let i54 = 0; i54 < 50; i54++) {
        let v61;
        try { v61 = f2(); } catch (e) {}
        y += v61;
    }
    return y;
}
try { test2(); } catch (e) {}
f2 = h;
try { test2(); } catch (e) {}
