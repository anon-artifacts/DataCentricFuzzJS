actual = "";
expected = "g 0,g 1,g 2,g 3,g 4,";
function g(a5) {
    const v7 = "g " + a5;
    try { appendToActual(v7); } catch (e) {}
}
function f() {
    try { g.apply(this, arguments); } catch (e) {}
}
for (let i15 = 0; i15 < 5; ++i15) {
    try { f(i15); } catch (e) {}
}
