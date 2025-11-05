actual = "";
expected = "1 2,1 2,1 2,1 2,1 2,1 2,1 2,1 2,1 undefined,1 undefined,1 undefined,1 undefined,1 undefined,1 undefined,1 undefined,1 undefined,";
function g(a5, a6) {
    const v9 = (a5 + " ") + a6;
    try { appendToActual(v9); } catch (e) {}
}
function f() {
    for (let i14 = 0; i14 < 8; ++i14) {
        try { g.apply(this, arguments); } catch (e) {}
    }
}
try { f(1, 2); } catch (e) {}
try { f(1); } catch (e) {}
