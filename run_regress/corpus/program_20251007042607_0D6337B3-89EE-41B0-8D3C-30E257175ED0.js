actual = "";
expected = "4,";
function k(a5) {
    for (let i7 = 0; i7 < 5; ++i7) {
        a5(i7);
    }
}
function t() {
    var x = 1;
    function u() {
        function f18(a19) {
            x = a19;
        }
        k(f18);
        try { appendToActual(x); } catch (e) {}
    }
    try { u(); } catch (e) {}
}
t();
