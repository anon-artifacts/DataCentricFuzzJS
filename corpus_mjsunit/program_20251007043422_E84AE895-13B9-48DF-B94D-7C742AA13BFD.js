actual = "";
expected = "0,1,2,3,4,";
function g(a5) {
    try { a5(); } catch (e) {}
}
function f(a8) {
    var q;
    function f11() {
        try { appendToActual(a8); } catch (e) {}
    }
    g(q = f11);
}
for (let i16 = 0; i16 < 5; ++i16) {
    f(i16);
}
