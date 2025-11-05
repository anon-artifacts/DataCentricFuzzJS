actual = "";
expected = "0,1,2,3,4,";
function g(a5) {
}
function f(a7) {
    var q;
    function f10() {
        try { appendToActual(a7); } catch (e) {}
    }
    q = f10;
    try { q(); } catch (e) {}
}
for (let i15 = 0; i15 < 5; ++i15) {
    f(i15);
}
