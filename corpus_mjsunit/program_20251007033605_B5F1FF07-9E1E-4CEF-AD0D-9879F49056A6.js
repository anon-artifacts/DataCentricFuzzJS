actual = "";
expected = "1,";
function createCounter() {
    var i = 0;
    function f7() {
        return ++i;
    }
    var counter = f7;
    return counter;
}
function f() {
    var counter;
    for (let i14 = 0; i14 < 100; ++i14) {
        counter = createCounter();
    }
    const v21 = counter();
    try { appendToActual(v21); } catch (e) {}
}
try { f(); } catch (e) {}
