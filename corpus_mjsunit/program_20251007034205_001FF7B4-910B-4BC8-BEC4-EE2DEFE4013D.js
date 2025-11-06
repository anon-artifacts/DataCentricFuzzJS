actual = "";
expected = "5,";
function f() {
    var p = 0;
    function g() {
        for (let i9 = 0; i9 < 5; ++i9) {
            p++;
        }
    }
    g();
    try { appendToActual(p); } catch (e) {}
}
try { f(); } catch (e) {}
