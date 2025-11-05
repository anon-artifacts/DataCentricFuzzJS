actual = "";
expected = "150,";
var g = 0;
function h(a7) {
    var ans = 0;
    for (let i11 = 0; i11 < 5; ++i11) {
        ans += a7?.[i11];
    }
    g = ans;
}
function f() {
    try { h(arguments); } catch (e) {}
}
for (let i22 = 0; i22 < 5; ++i22) {
    try { f(10, 20, 30, 40, 50); } catch (e) {}
}
try { appendToActual(g); } catch (e) {}
