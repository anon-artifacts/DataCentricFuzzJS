function f() {
    throw "boom";
    try {
    } catch(e2) {
    }
}
try { f(); } catch (e) {}
