actual = "";
expected = "4,4,4,";
function k(a5) {
    for (let i7 = 0; i7 < 5; ++i7) {
        a5(i7);
    }
}
function t() {
    var x = 1;
    function f17(a18) {
        x = a18;
    }
    k(f17);
    try { appendToActual(x); } catch (e) {}
}
try { t(); } catch (e) {}
try { t(); } catch (e) {}
try { t(); } catch (e) {}
