actual = "";
expected = "0,1,2,3,4,";
function loop(a5) {
    var p;
    for (let i9 = 0; i9 < 10; ++i9) {
        p = a5();
    }
    return p;
}
function f(a17, a18) {
    function f19() {
        return a18;
    }
    var g = f19;
    a18 = a17;
    const v21 = loop(g);
    try { appendToActual(v21); } catch (e) {}
}
for (let i25 = 0; i25 < 5; ++i25) {
    try { f(i25); } catch (e) {}
}
