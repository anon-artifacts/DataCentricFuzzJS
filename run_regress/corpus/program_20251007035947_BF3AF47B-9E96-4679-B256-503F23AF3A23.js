actual = "";
expected = "6,";
var g = 0;
function h(a7) {
    g = a7?.length;
}
function f() {
    try { h(arguments); } catch (e) {}
}
for (let i13 = 0; i13 < 5; ++i13) {
    try { f(10, 20, 30, 40, 50, 60); } catch (e) {}
}
try { appendToActual(g); } catch (e) {}
