actual = "";
expected = "4,";
function k(a5) {
    for (let i7 = 0; i7 < 5; ++i7) {
        a5(i7);
    }
}
function t(a15) {
    function f16(a17) {
        a15 = a17;
    }
    k(f16);
    try { appendToActual(a15); } catch (e) {}
}
try { t(1); } catch (e) {}
