function g(a1, a2, a3, a4) {
}
function f(a6, a7, a8) {
    let v10;
    try { v10 = getMaxArgs(); } catch (e) {}
    arguments.length = v10 + 1;
    try { g.apply(this, arguments); } catch (e) {}
}
try { f(); } catch (e) {}
