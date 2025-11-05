v = [];
v.length = 1 << 30;
function f() {
    v++;
}
try { f(); } catch (e) {}
