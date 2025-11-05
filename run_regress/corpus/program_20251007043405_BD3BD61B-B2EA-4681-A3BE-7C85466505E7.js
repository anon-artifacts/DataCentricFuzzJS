function f() {
    function g() {
        const x = 1;
        x = 2;
    }
    try { g(); } catch (e) {}
}
f();
