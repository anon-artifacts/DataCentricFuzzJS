actual = "";
expected = "g,g,g,g,g,";
function g() {
    try { appendToActual("g"); } catch (e) {}
}
function f() {
    try { g.apply(this, arguments); } catch (e) {}
}
for (let i13 = 0; i13 < 5; ++i13) {
    f();
}
