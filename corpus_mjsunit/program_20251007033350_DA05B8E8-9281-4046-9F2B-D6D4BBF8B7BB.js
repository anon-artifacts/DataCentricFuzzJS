actual = "";
expected = "2,";
function k(a5) {
    for (let i7 = 0; i7 < 100; ++i7) {
        a5();
    }
}
function t() {
    var x = 1;
    function f17() {
        x = 2;
    }
    k(f17);
    try { appendToActual(x); } catch (e) {}
}
try { t(); } catch (e) {}
