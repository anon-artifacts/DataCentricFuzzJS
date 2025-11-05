const v1 = {};
with (v1) {
    function f2() {
        v1.y;
        return f2;
    }
    function f4() {
        return v1;
    }
    g = f4;
}
try {
const t0 = "with(...) { function f ...} should set f in the global scope";
t0();
} catch (e) {}
