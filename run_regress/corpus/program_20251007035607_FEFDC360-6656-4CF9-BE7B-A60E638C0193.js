actual = "";
expected = "2,";
function k(a5) {
    function f6() {
        for (let i8 = 0; i8 < 10; ++i8) {
            a5();
        }
    }
    f6();
}
function t() {
    var x = 1;
    function f19() {
        x = 2;
    }
    k(f19);
    try { appendToActual(x); } catch (e) {}
}
try { t(); } catch (e) {}
