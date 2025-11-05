actual = "";
expected = "a,";
function f() {
}
for (let i7 = 0; i7 < 1000; ++i7) {
    try { f(1, 2); } catch (e) {}
}
try { appendToActual("a"); } catch (e) {}
