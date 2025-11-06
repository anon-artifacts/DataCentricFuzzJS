actual = "";
expected = "5,";
var g = 0;
function h(a7) {
    for (let i9 = 0; i9 < 6; ++i9) {
        g = a7?.length;
    }
}
function f() {
    try { h(arguments); } catch (e) {}
}
for (let i20 = 0; i20 < 5; ++i20) {
    try { f(10, 20, 30, 40, 50); } catch (e) {}
}
try { appendToActual(g); } catch (e) {}
